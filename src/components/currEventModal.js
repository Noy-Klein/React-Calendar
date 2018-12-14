import React, { Component } from 'react';
import '../cssFiles/App.css';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class CurrentEvent extends Component {
    render() { // maybe open the modal when a day is clicked? and not a event?
        if (this.props.store.currentEvent) {
            return (
                <div className='formContainer'>
                <span  className='x' style={{float: 'right', marginRight: '5px'}} onClick={this.props.store.closeCurrModal}>X</span>
                    <div>{this.props.store.currentEvent.title}</div> 
                </div>
            )
        }
        else {
            return null
        }
    }
}

export default CurrentEvent;