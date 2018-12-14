import React, { Component } from 'react';
import '../cssFiles/App.css';
import { observer, inject } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Tooltip from "react-simple-tooltip"
import Popup from "reactjs-popup";
import AddForm from './addEventForm';

@inject('store')
@observer
class AddButton extends Component {

    open = () => {
        this.props.store.color = null
        this.props.store.openFromWhere(0)
        this.props.store.openAddForm()
    }

    render() {
        return (
            <div>
                <div>
                    <Tooltip arrow={6} fontSize='12px' placement='top' content='Add A New Event'>
                        <div className='addEvent' onClick={this.open}><FontAwesomeIcon size='3x' icon={faPlusCircle} /></div>
                        <Popup contentStyle={{backgroundImage: `linear-gradient(-90deg, ${this.props.store.color}, ${this.props.store.color}, blue)`, border: 'none'}} open={this.props.store.addEventBtn}
                            closeOnDocumentClick
                            onClose={this.props.store.closeAddForm}>
                            <AddForm />
                        </Popup>
                    </Tooltip>
                </div>
                
                {this.props.store.saved ?
                    <div className='savedMessage'>Your Event Was Saved Successfully!</div>
                    :
                    null
                }
                {this.props.store.deleted ?
                    <div className='savedMessage'>Your Event Was Deleted</div>
                    :
                    null
                }
                {this.props.store.edited ?
                    <div className='savedMessage'>Your Changes Were Saved</div>
                    :
                    null
                }
            </div>
        )
    }
}

export default AddButton;