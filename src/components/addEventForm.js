import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import 'emoji-mart/css/emoji-mart.css'
import '../cssFiles/form.css';
import { Picker } from 'emoji-mart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@inject('store')
@observer
class AddForm extends Component {

    @observable editDate = false;

    @observable title = '';
    @observable location = '';
    @observable time = '';
    @observable color = '';
    @observable date = '';
    @observable until = '';

    @observable colors = ['#bebebe', '#ff4500', '#20b2aa', '#87cefa', '#dda0dd', '#f4a460', '#db7093']


    componentDidMount = () => {
        if (this.props.currentEvent) {
            this.props.store.color = this.props.currentEvent.color;
            this.color = this.props.currentEvent.color;
            this.location = this.props.currentEvent.location;
            this.title = this.props.currentEvent.title;
            this.time = this.props.currentEvent.time;
            let day;
            let month;
            if(this.props.currentEvent.day.toString().split('').length === 1){
                day = '0' + this.props.currentEvent.day
            }
            else{
                day = this.props.currentEvent.day
            }
            if(this.props.currentEvent.month.toString().split('').length === 1){
                month = '0' + this.props.currentEvent.month
            }
            else{
                month = this.props.currentEvent.month
            }
            let tild;
            let tilm;
            if(this.props.currentEvent.tilDay.toString().split('').length === 1){
                tild = '0' + this.props.currentEvent.tilDay
            }
            else{
                tild = this.props.currentEvent.tilDay
            }
            if(this.props.currentEvent.tilMonth.toString().split('').length === 1){
                tilm = '0' + this.props.currentEvent.tilMonth
            }
            else{
                tilm = this.props.currentEvent.tilMonth
            }
            this.until = `${this.props.currentEvent.tilYear}-${tilm}-${tild}`
            this.date = `${this.props.currentEvent.year}-${month}-${day}`
        }
    }

    editStart = () => {
        this.editDate = true;
    }

    createColors = () => {
        let colorHTML = [];
        for (let c of this.colors) {
            colorHTML.push(<div key={c} className='colorOption' id={c} onClick={this.pickColor} style={{ backgroundColor: c }}></div>)
        }
        return colorHTML
    }

    @action pickColor = (e) => {
        this.props.store.color = e.target.id;
        this.color = e.target.id;
    }

    @action change = (e) => {
        this[e.target.name] = e.target.value;
    }

    validation = () => {
        if (!this.date || !this.title || !this.location || !this.time || !this.color) {
            if (!this.date) {
                alert('You Forgot To Enter A Date...')
                return 0
            }
            if (!this.title) {
                alert('You Forgot To Enter A Title')
                return 0
            }
            if (!this.location) {
                alert('You Forgot To Enter A Location...')
                return 0
            }
            if (!this.time) {
                alert('You Forgot To Enter A Time...')
                return 0
            }
            if (!this.color) {
                alert('You Forgot To Enter A Background Color...')
                return 0
            }
        }
        else {
            return 1
        }
    }

    saveEvent = () => {
        let validate = this.validation();
        if (validate === 0) {
            return
        }
        let day = this.date.split('-')[2];
        if (day.split('')[0] === '0') {
            day = day.split('')[1]
        }
        let month = this.date.split('-')[1];
        if (month.split('')[0] === '0') {
            month = month.split('')[1]
        }
        let year = this.date.split('-')[0];
        let tilDay;
        let tilMonth;
        let tilYear;
        if (!this.until) {
            tilDay = day;
            tilMonth = month;
            tilYear = year;
        }
        else {
            tilDay = this.until.split('-')[2]
            if (tilDay.split('')[0] === '0') {
                tilDay = tilDay.split('')[1]
            }


            tilMonth = this.until.split('-')[1]
            if (tilMonth.split('')[0] === '0') {
                tilMonth = tilMonth.split('')[1]
            }

            tilYear = this.until.split('-')[0]
        }
        if(tilDay < day && tilMonth <= month){
            tilDay = day;
            tilMonth = month;
        }
        let newEvent = {
            title: this.title,
            day: day,
            month: month,
            year: year,
            time: this.time,
            tilDay: tilDay,
            tilMonth: tilMonth,
            tilYear: tilYear,
            location: this.location,
            color: this.color
        }
        if (this.props.currentEvent) {
            newEvent._id = this.props.currentEvent._id;
            this.props.store.saveEventChanges(newEvent);
            this.props.store.closeAddForm();
            this.props.store.closeCurrModal();
            this.props.store.closeDaysEvents();
            this.props.store.eventEdited()
        }
        else {
            this.props.store.addEvent(newEvent);
            this.props.store.closeAddForm();
            this.props.store.eventSaved();
        }
    }

    openkb = () => {
        this.props.store.openkeyboard();
    }

    @action addEmoji = (e) => {
        this.title += e.native;
    }

    @action changeDate = (val) => {
        this.date = val;
    }

    render() {
        let wantedDay;
        let pickMonth = (this.props.store.todaysMonth).toString();
        if (pickMonth.split('').length === 1) {
            pickMonth = '0' + pickMonth;
        }
        let colorsArray = this.createColors();
        if (this.props.store.wantedDay && this.props.store.wantedDay.split('').length === 1) {
            wantedDay = '0' + this.props.store.wantedDay
        }
        else {
            wantedDay = this.props.store.wantedDay
        }
        if (this.props.store.wherePlusWasClicked === 1) {
            this.changeDate(this.props.store.thisYear + '-' + pickMonth + '-' + wantedDay)
        }
        return (
            <div style={{ textAlign: 'center', backgroundImage: `linear-gradient(-90deg, ${this.color}, ${this.color}, blue)` }} className='formContainer'>
                {this.props.currentEvent ?
                    <div style={{ float: 'left' }} className='x' onClick={this.props.store.goBack}><FontAwesomeIcon icon={faArrowLeft} size='1x' /></div>
                    :
                    <div className='x' style={{ float: 'right', marginRight: '5px' }} onClick={this.props.store.closeAddForm}><FontAwesomeIcon icon={faTimes} size='1x' /></div>

                }
                <h2 className='title addTitle'>Add An Event</h2>

                <span><div className='category'>Start: </div><input className='input' type='date' min={this.props.store.thisYear + '-' + pickMonth + '-01'} name='date' value={this.date} onChange={this.change} /></span><br />
                
                {this.props.store.wherePlusWasClicked === 0 ?
                    <span><div className='category'>End: </div><input className='input' type='date' min={this.props.store.thisYear + '-' + pickMonth + '-01'} name='until' value={this.until} onChange={this.change} /></span>
                    :
                    <span><span className='category'>End: </span><input className='input' type='date' min={this.props.store.thisYear + '-' + pickMonth + '-' + wantedDay} name='until' value={this.until} onChange={this.change} /></span>
                }<br />

                <div className='category'>Title: </div><input className='input shorter' type='text' placeholder='Title' name='title' value={this.title} onChange={this.change} /><button className='emoji' type='button' onClick={this.openkb}>{this.props.store.openkb ? <img src='https://png.pngtree.com/svg/20160826/keyboard_486414.png' alt='keyboard' height='15px' width='15px' /> : <img height='15px' width='15px' src='https://png.pngtree.com/svg/20170620/emoji_happy_1159202.png' alt='emoji' />}</button><br />
                {this.props.store.openkb ? <div><Picker showPreview={false} onSelect={this.addEmoji} set='emojione' /></div> : null}
                 {/* try to put the picker in a popup  */}
                <div className='category'>Location :</div><input className='input' type='text' placeholder='Location' name='location' value={this.location} onChange={this.change} /><br />
                <div className='category'>Time: </div><input className='input' type='time' placeholder='From' name='time' value={this.time} onChange={this.change} />
                <div className='title addTitle'>Pick A Background Color:</div>
                <div className='colorContainer'>
                    {colorsArray.map(c => {
                        if (c.props.style.backgroundColor === this.color) {
                            c.props.style.border = '2px solid black';
                            c.props.style.height = '36px';
                            c.props.style.width = '36px';
                            return c
                        }
                        else {
                            return c
                        }
                    })
                    }
                </div>
                <button type='button' className='btn addTitle' onClick={this.saveEvent} >Save</button>
            </div>
        )
    }
}

export default AddForm;