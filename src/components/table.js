import React, { Component } from 'react';
import Loader from './loader'
import '../cssFiles/table.css'
import { observer, inject } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "react-simple-tooltip"

@inject('store')
@observer
class Table extends Component {

    componentDidMount = () => {
        window.addEventListener("keyup", this.keyHandling);
        this.renderToday()
        this.props.store.getEvents();
        this.props.store.getHolidays();
    }

    keyHandling = (e) => {
        if (this.props.store.daysEventsModal || this.props.store.addEventBtn) {
            return
        }
        else {
            if (e.keyCode === 39) {
                this.next();
            }
            if (e.keyCode === 37) {
                this.prev();
            }
        }
    }

    getMonthAxios = () => {
        this.props.store.getMonthDetails();
    }

    renderToday = () => {
        if (this.props.store.todaysMonth === 13) {
            this.props.store.ifMonthIs13();
            this.props.store.getMonthDetails();
        }
        else if (this.props.store.todaysMonth === 0) {
            this.props.store.ifMonthIs0();
            this.props.store.getMonthDetails();
        }
        else {
            this.props.store.getMonthDetails();
        }
    }

    renderMonth = () => {
        let demoHTML = []
        let demoEvents = []
        for (let i = 1; i <= this.props.store.monthDetails[1]; i++) {
            for (let e of this.props.store.events) {
                if (e.day === i && e.month === this.props.store.todaysMonth && e.year === this.props.store.thisYear) {
                    demoEvents.push({ title: e.title, color: e.color, id: e._id })
                }
            }
            // console.log(this.props.store.holidays)
            // for(let h of this.props.store.holidays){
            //     // console.log(typeof h.date.day, h.date.day, h.date.month, h.date.year)
            //     if(h.day === i.toString() && h.month === this.props.store.todaysMonth.toString() && h.year === this.props.store.thisYear.toString()){
            //         demoEvents.push({title: h.title, color: h.color, id: h._id})
            //         // console.log(typeof h.date.day, h.date.day, h.date.month, h.date.year)
            //     }
            // }
           
            if (demoEvents.length > 1) {
                if (new Date().getDate() === i && new Date().getMonth() + 1 === this.props.store.todaysMonth && new Date().getFullYear() === this.props.store.thisYear) { // not working ?
                    demoHTML.push(<div style={{ position: 'relative' }} id={i} onClick={this.clickDay} key={i} className='row'><span style={{ backgroundColor: 'blue', color: 'white', borderRadius: '50%', padding: '5px' }}>{i}</span> <div onClick={this.openEvent} id={demoEvents[0].id} style={{ backgroundColor: demoEvents[0].color }} className='event' key={demoEvents[0].title} >{demoEvents[0].title}</div> <div id={demoEvents[0].id} onClick={this.clickDay} style={{ fontSize: '15px', color: 'blue', margin: '0', cursor: 'pointer' }}>...</div> </div>)
                }
                else {
                    demoHTML.push(<div style={{ position: 'relative' }} id={i} onClick={this.clickDay} key={i} className='row'>{i} <div onClick={this.openEvent} id={demoEvents[0].id} style={{ backgroundColor: demoEvents[0].color }} className='event' key={demoEvents[0].title} >{demoEvents[0].title}</div> <div id={demoEvents[0].id} onClick={this.clickDay} style={{ fontSize: '15px', color: 'blue', margin: '0', cursor: 'pointer' }}>...</div> </div>)
                }
            }
            else {
                if (new Date().getDate() === i && new Date().getMonth() + 1 === this.props.store.todaysMonth && new Date().getFullYear() === this.props.store.thisYear) {
                    demoHTML.push(<div style={{ position: 'relative' }} id={i} onClick={this.clickDay} key={i} className='row'><span style={{ backgroundColor: 'blue', color: 'white', borderRadius: '50%', padding: '5px' }}>{i}</span> {demoEvents.map(e => { return <div onClick={this.openEvent} id={e.id} style={{ backgroundColor: e.color }} className='event' key={e.title} >{e.title}</div> })}</div>)
                }
                else {
                    demoHTML.push(<div style={{ position: 'relative' }} id={i} onClick={this.clickDay} key={i} className='row'>{i} {demoEvents.map(e => { return <div onClick={this.openEvent} id={e.id} style={{ backgroundColor: e.color }} className='event' key={e.title} >{e.title}</div> })}</div>)
                }
            }
            demoEvents = []
        }
        if (this.props.store.monthDetails[0] === 8) {
            return demoHTML
        }
        else {
            let emptyTimes = this.props.store.monthDetails[0] - 1;
            for (let j = 0; j < emptyTimes; j++) {
                demoHTML.unshift(<div style={{backgroundColor: 'rgba(172, 172, 172, 0.432)'}} key={`emptydate${j}`} className='row'></div>)
            }
            return demoHTML
        }
    }

    prev = () => {
        this.props.store.prevMonth();
        this.renderToday()
        this.props.store.getEvents()
    }

    next = () => {
        this.props.store.nextMonth();
        this.renderToday()
        this.props.store.getEvents()
    }

    openEvent = (e) => {
        this.props.store.openCurrModal();
        this.props.store.clickOnEvent(e.target.id) // finds the id of the event
    }

    today = () => {
        this.props.store.returnToToday()
        this.renderToday()
        this.props.store.getEvents()
    }

    clickDay = (e) => {
        this.props.store.getEventsOfDay(e.target.id)
        this.props.store.openDaysEvents();
    }

    render() {
        if (this.props.store.events) {
            let html = this.renderMonth();
            return (
                <div>
                    <div className='header'>
                        <div className='prev'><Tooltip className='tooltip' arrow={6} fontSize='10px' placement='right' content='Try Your Left Key!'><span style={{ cursor: 'pointer' }} onClick={this.prev}><FontAwesomeIcon size='2x' icon={faArrowLeft} /></span></Tooltip></div>
                        <h1 className='monthName'>{this.props.store.monthNames[this.props.store.todaysMonth]} {this.props.store.thisYear}
                            {this.props.store.todaysMonth !== new Date().getMonth() + 1 || this.props.store.thisYear !== new Date().getFullYear() ?
                                <span className='backToToday'>
                                    <Tooltip arrow={6} fontSize='10px' placement='right' content='Back To Today'><FontAwesomeIcon onClick={this.today} icon={faCalendar} /></Tooltip>
                                </span>
                                :
                                null
                            }
                        </h1>
                        <div className='next'><Tooltip className='tooltip' arrow={6} fontSize='10px' placement='left' content='Try Your Right Key!'><span style={{ cursor: 'pointer' }} onClick={this.next}><FontAwesomeIcon size='2x' icon={faArrowRight} /></span></Tooltip></div>
                    </div>
                    {/* {this.props.store.screen < 1019 ? this.props.store.smallLetters() : this.props.store.bigLetters()} */}
                    <div className='container'>
                        <div className='row dayinweek'>{this.props.store.screen > 1019 ? 'Sunday' : 'Sun'}</div>
                        <div className='row dayinweek'>{this.props.store.screen > 1019 ? 'Monday' : 'Mon'}</div>
                        <div className='row dayinweek'>{this.props.store.screen > 1019 ? 'Tuesday' : 'Tue'}</div>
                        <div className='row dayinweek'>{this.props.store.screen > 1019 ? 'Wednesday' : 'Wed'}</div>
                        <div className='row dayinweek'>{this.props.store.screen > 1019 ? 'Thursday' : 'Thu'}</div>
                        <div className='row dayinweek'>{this.props.store.screen > 1019 ? 'Friday' : 'Fri'}</div>
                        <div className='row dayinweek'>{this.props.store.screen > 1019 ? 'Saturday' : 'Sat'}</div>
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