import React, { Component } from 'react';
import '../cssFiles/App.css';
import { observer, inject } from 'mobx-react';
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "react-simple-tooltip";
import { observable, action } from "mobx";
import Loader from './loader';
import AddForm from './addEventForm';

@inject('store')
@observer
class CurrentDay extends Component {

    @observable wantToDelete = false;
    @observable okDelete = false;
    @observable titleToDelete = null;

    @observable currentEvent = null;

    @action close = () => {
        this.wantToDelete = false;
    }

    @action findEvent = (id) => {
        if (id === null) {
            this.titleToDelete = null;
        }
        else {
            this.titleToDelete = this.props.store.daysEvents.find(d => d._id === id)
        }

    }

    deleteEvent = (e) => {
        this.findEvent(e.target.id)
        this.wantToDelete = true;
        this.okDelete = window.confirm(`Are You Sure You Want To Delete "${this.titleToDelete.title}" ?`)
        if (this.okDelete) {
            this.props.store.deleteEvent(e.target.id)
            this.props.store.eventDeleted()
            this.close()
            this.props.store.closeDaysEvents()
        }
        else {
            this.wantToDelete = false;
        }
        this.findEvent(null);
    }

    addEventInDay = () => {
        this.props.store.openFromWhere(1)
        this.props.store.openAddForm();
    }

    edit = (e) => {
        this.props.store.wantToEdit();
        this.currentEvent = this.props.store.events.find(d => d._id === e.target.id)
    }

    saveChanges = () => {
        this.props.store.saveChanges()
    }

    render() {
        if (this.props.store.daysEvents && this.props.store.daysEvents.length > 0) {
            return (
                <Popup open={this.props.store.daysEventsModal}
                    closeOnDocumentClick
                    onClose={this.props.store.closeDaysEvents}>
                    <div className='scroll'>
                        {/* how to scroll through events? */}
                        {!this.props.store.editMode ?
                            <div style={{ float: 'right' }} className='x' onClick={this.props.store.closeDaysEvents}><FontAwesomeIcon icon={faTimes} size='1x' /></div>

                            : null}

                        {this.props.store.editMode ?
                            <AddForm currentEvent={this.currentEvent} />
                            :
                            <div><h3 className='title'>Events On {this.props.store.wantedDay}/{this.props.store.todaysMonth}/{this.props.store.thisYear}</h3>
                                <div>{this.props.store.daysEvents.map(d => {
                                    return (
                                        <div className='eventInPopup' style={{ backgroundImage: `linear-gradient(-90deg, ${d.color}, ${d.color}, blue)` }} key={d._id}>
                                            <div className='title'><h4>{d.title}</h4></div>
                                            <div>From : {d.day}/{d.month}/{d.year}</div>
                                            {(d.day === d.tilDay && d.month === d.tilMonth && d.year === d.tilYear) || (!d.tilDay) ?
                                                <div>Until : {d.day}/{d.month}/{d.year}</div>
                                                :
                                                <div>Until : {d.tilDay}/{d.tilMonth}/{d.tilYear}</div>
                                            }

                                            <div>Location: {d.location}</div>
                                            <div>Time: {d.time}</div>
                                            <div className='trash clickable'><img id={d._id} onClick={this.deleteEvent} height='20px' width='20px' src='http://freevector.co/wp-content/uploads/2012/02/65186-trash-can.png' alt='trash' /></div>
                                            <div className='editbtn clickable'><img id={d._id} onClick={this.edit} alt='edit' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Edit_font_awesome.svg/512px-Edit_font_awesome.svg.png' height='20px' width='20px' /></div>
                                        </div>
                                    )
                                })}</div>
                                <br /><br /><div className='addOnDay'><Tooltip arrow={6} fontSize='15px' placement='top' content='Add An Event For This Day'><div onClick={this.addEventInDay} ><FontAwesomeIcon size='2x' icon={faPlusCircle} /></div></Tooltip></div>
                            </div>
                        }

                    </div>
                </Popup>
            )
        }
        else if (this.props.store.daysEvents && this.props.store.daysEvents.length === 0) {
            return (
                <Popup className="modal" open={this.props.store.daysEventsModal}
                    closeOnDocumentClick
                    onClose={this.props.store.closeDaysEvents}>
                    <div>
                        <div style={{ float: 'right' }} className='x' onClick={this.props.store.closeDaysEvents}>X</div>
                        <div className='noEvents'><p>No Events For This Day Yet...</p></div>
                        <div className='addOnDay'><Tooltip arrow={6} fontSize='15px' placement='left' content='Add An Event For This Day'><div onClick={this.addEventInDay} ><FontAwesomeIcon size='2x' icon={faPlusCircle} /></div></Tooltip></div>
                    </div>
                </Popup>
            )
        }
        else if(!this.props.store.daysEvents){
            return (
                <Popup open={this.props.store.daysEventsModal}
                    closeOnDocumentClick
                    onClose={this.props.store.closeDaysEvents}>
                    <div className='loader'><Loader /></div>
                </Popup>
            )
        }
    }
}

export default CurrentDay;