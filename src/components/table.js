import React, { Component } from 'react';
import Axios from 'axios';
import Loader from './loader'
import '../cssFiles/table.css'
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class Table extends Component {
    constructor() {
        super()
        this.state = {
            month: [],
            todaysMonth: new Date().getMonth() + 1,
            thisYear: new Date().getFullYear(),
            events: [],
            monthNames: ['none', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        }
    }

    componentDidMount = () => {
        this.renderToday()
        this.getEventsAxios();
    }

    getEventsAxios = () => {
        Axios.get('http://localhost:2222/getdays/allevents').then((data)=>{
            this.setState({events: data.data})
        })
    }

    getMonthAxios = () => {
        Axios.get(`http://localhost:2222/getdays/${this.state.thisYear}/${this.state.todaysMonth}`).then((data) => {
            let demo = [...data.data];
            demo[0] += 2;
            this.setState({ month: demo })
        })
    }

    renderToday = () => {
        if (this.state.todaysMonth === 13) {
            this.setState({ thisYear: this.state.thisYear + 1, todaysMonth: 1 }, () => {
                this.getMonthAxios()
            })
        }
        else if (this.state.todaysMonth === 0) {
            this.setState({ thisYear: this.state.thisYear - 1, todaysMonth: 12 }, () => {
                this.getMonthAxios()
            })
        }
        else {
            this.getMonthAxios()
        }
    }

    renderMonth = () => {//פה אני מרנדרת את האירועים, בודקאת אם בתאריך איי בחודש הנוכחי שבסטייט בשנה הנוכחית שבסטייס
        let demoHTML = []
        let demoEvents = []
            for (let i = 1; i <= this.state.month[1]; i++) {
                //
                for(let e of this.state.events){
                    if(e.day === i && e.month === this.state.todaysMonth && e.year === this.state.thisYear){
                        demoEvents.push(e.title)
                    }
                }
                demoHTML.push(<div key={i} className='row'>{i} {demoEvents.map(e => {return <div className='event' key={e} >{e}</div>})}</div>)
                demoEvents = []

            }
        // }
        if (this.state.month[0] === 8) {
            return demoHTML
        }
        else {
            let emptyTimes = this.state.month[0] - 1;
            for (let j = 0; j < emptyTimes; j++) {
                demoHTML.unshift(<div key={`emptydate${j}`} className='row'></div>)
            }
            return demoHTML
        }
    }

    insertEvents = () => {
        return
    }

    prev = () => {
        this.setState({ todaysMonth: this.state.todaysMonth - 1 }, () => {
            this.renderToday()
            this.getEventsAxios()
        })
    }

    next = () => {
        this.setState({ todaysMonth: this.state.todaysMonth + 1 }, () => {
            this.renderToday()
            this.getEventsAxios()
        })
    }

    render() {
        console.log(this.props.store.nothing
            )
        if (this.state.events.length > 0) {
            let html = this.renderMonth();
            return (
                <div>
                    <div className='header'>
                        <button type='button' style={{ display: 'inline-block' }} onClick={this.prev} className='btn prev'>PREVIOUS</button>
                        <h2 style={{ display: 'inline-block' }}>{this.state.monthNames[this.state.todaysMonth]} {this.state.thisYear}</h2>
                        <button type='button' style={{ display: 'inline-block' }} onClick={this.next} className='btn next'>NEXT</button>
                    </div>
                    <div className='container'>
                        <div className='row'>SUNDAY</div>
                        <div className='row'>MONDAY</div>
                        <div className='row'>TUESDAY</div>
                        <div className='row'>WEDNESDAY</div>
                        <div className='row'>THURSDAY</div>
                        <div className='row'>FRIDAY</div>
                        <div className='row'>SATURDAY</div>
                        {html}
                    </div>
                </div>
            )
        }
        else {
            return (
                <Loader />
            )
        }
    }
}

export default Table;