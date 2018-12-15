import { observable, action } from "mobx";
import Axios from 'axios';

class CalendarStore {
    @observable color = null;
    @observable eventToEdit = null;
    @observable editMode = false;
    @observable edited = false;
    @observable deleted = false;
    @observable saved = false;
    @observable letters = false
    @observable wherePlusWasClicked = 0;
    @observable wantedDay = null
    @observable screen = document.documentElement.clientWidth;
    @observable customColor = null;
    @observable openkb = false;
    @observable daysEventsModal = false;
    @observable modal = false;
    @observable currentEvent = null;
    @observable daysEvents = null;
    @observable addEventBtn = false;
    @observable events = [];
    @observable monthDetails = [];
    @observable thisYear = new Date().getFullYear();
    @observable todaysMonth = new Date().getMonth() + 1;
    @observable monthNames = ['none', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    @observable holidays = [];

    @action wantToEdit = () => {
        this.editMode = true;
    }

    @action saveChanges = () => {
        this.editMode = false;
    }

    @action goBack = () => {
        this.editMode = false;
    }

    @action eventEdited = () => {
        this.edited = true;
        setTimeout(() => {
            this.edited = false;
        }, 2000);
    }

    @action eventSaved = () => {
        this.saved = true;
        setTimeout(() => {
            this.saved = false;
        }, 2000);
    }

    @action eventDeleted = () => {
        this.deleted = true;
        setTimeout(() => {
            this.deleted = false;
        }, 2000);
    }

    @action openFromWhere = (num) => {
        this.color = null;
        this.wherePlusWasClicked = num;
    }

    @action openkeyboard = () => {
        this.openkb = !this.openkb;
    }

    @action closekeyboard = () => {
        this.openkb = false;
    }

    @action openDaysEvents = () => {
        this.modal = false;
        this.addEventBtn = false;
        this.daysEventsModal = true;
    }

    @action closeDaysEvents = () => {
        // if(this.editMode){
        //     this.wantToSaveChanges = window.confirm('are you sure you want to exit? it wont save your changes...')
        // }
        // if(this.wantToSaveChanges){
            this.daysEventsModal = false;
            this.daysEvents = null;
            this.editMode = false;
        // }
        // else{
        //     return;
        // }
    }

    @action openCurrModal = () => {
        this.daysEventsModal = false;
        this.addEventBtn = false;
        this.modal = true;
    }

    @action closeCurrModal = () => {
        this.modal = false;
    }

    @action returnToToday = () => {
        this.thisYear = new Date().getFullYear();
        this.todaysMonth = new Date().getMonth() + 1;
    }

    @action openAddForm = () => {
        this.daysEventsModal = false;
        this.modal = false;
        this.addEventBtn = true;
    }

    @action closeAddForm = () => {
        this.addEventBtn = false;
    }

    @action getEvents = () => {
        Axios.get('/allevents').then((data) => {
            this.events = data.data
        })
    }

    @action getMonthDetails = () => {
        Axios.get(`/getdays/${this.thisYear}/${this.todaysMonth}`).then((data) => {
            this.monthDetails = data.data;
            this.monthDetails[0] += 2;
        })
    }

    @action nextMonth = () => {
        this.todaysMonth += 1;
    }

    @action prevMonth = () => {
        this.todaysMonth -= 1;
    }

    @action ifMonthIs13 = () => {
        this.thisYear = this.thisYear + 1;
        this.todaysMonth = 1;
    }

    @action ifMonthIs0 = () => {
        this.thisYear = this.thisYear - 1;
        this.todaysMonth = 12;
    }

    @action addEvent = (newEvent) => {
        Axios.post('/addevent', newEvent).then((data) => {
            this.events.push(data.data)
        })
    }

    @action saveEventChanges = (edited) => {
        Axios.post('/editEvent' , edited).then((data)=>{
            let event = this.events.find(e => e._id === edited._id)
            let index = this.events.indexOf(event)
            this.events.splice(index,1 ,edited);
            this.getEvents()
        })
    }

    clickOnEvent = (id) => {
        Axios.get('/findEvent/' + id).then((data) => {
            this.currentEvent = data.data;
        })
    }

    getEventsOfDay = (day) => {
        let wantedDay;
        if (day.split('').length > 2) {
            Axios.get('/findEvent/' + day).then((data) => {
                wantedDay = (data.data.day).toString();
                this.wantedDay = wantedDay
            }).then(() => {
                Axios.get(`/findByDate/${wantedDay}/${this.todaysMonth}/${this.thisYear}`).then((data) => {
                    this.daysEvents = data.data
                })
            })
        }
        else {
            wantedDay = day;
            this.wantedDay = wantedDay
            Axios.get(`/findByDate/${wantedDay}/${this.todaysMonth}/${this.thisYear}`).then((data) => {
                this.daysEvents = data.data
            })
        }
        // let holiday = this.holidays.find(h => h.title === day)
        // if(holiday){
        //     this.daysEvents.push(holiday)
        //     console.log(holiday)
        // }
        // console.log(this.daysEvents)
    }

    deleteEvent = (id) => {
        Axios.delete('/deleteevent/' + id).then((data) => {
            let wantedEvent = this.events.find(e => e._id === id);
            let indexInCalendarEvents = this.events.indexOf(wantedEvent);
            this.events.splice(indexInCalendarEvents, 1);
            let indexInPopupEvents = this.daysEvents.indexOf(wantedEvent);
            this.daysEvents.splice(indexInPopupEvents, 1)
        })
    }

    @action getHolidays = () => {
        Axios.get('https://www.calendarindex.com/api/v1/holidays?country=US&year=2018&api_key=fb7b2b3d41fbfcdb55e4d92d781187fe203caea3').then((data) => {
            data.data.response.holidays.map(h => {
                let date = h.date.split('-')
                let year = date[0]
                let month = date[1]
                let day = date[2].split(' ')[0]
                if (day.split('')[0] === '0') {
                    day = day.split('')[1]
                }
                if (month.split('')[0] === '0') {
                    month = month.split('')[1]
                }
                let until = h.end.split('-');
                let tilyear = until[0];
                let tilmonth = until[1];
                let tilday = until[2][0] + '' + until[2][1];
                let image;
                // Axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA-NDun_On5Bx3TerMVbAaC8jfU7jotv8M&cx=014991769965957097369:idopkmpkkbo&q=${h.name}&?searchType=Image&defaultToImageSearch=true&safe=active`).then((data)=>{
                //     image = data.data.items[0].pagemap.imageobject[0].thumbnailurl
                // })
                this.holidays.push({
                    _id: h.name,
                    title: h.name,
                    day: day,
                    month: month,
                    year: year,
                    time: '00:00',
                    tilDay: tilday,
                    tilmonth: tilmonth,
                    tilYear: tilyear,
                    location: '',
                    image: image,
                    color: '#66cdaa'
                })
                // Axios.post('http://localhost:2222/getdays/holidays', this.holidays)
            })
        })
    }

    bigLetters = () => {
        this.letters = false;
    }

    smallLetters = () => {
        this.letters = true;
    }

    @action goToTheEventsDay = (month, year) => {
        this.todaysMonth = month;
        this.thisYear = year;
    }

}

const Store = new CalendarStore();

export default Store;