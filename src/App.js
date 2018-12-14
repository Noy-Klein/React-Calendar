import React, { Component } from 'react';
import './cssFiles/App.css';
// import Timer from './components/timer';
import Table from './components/table';
import { observer, inject } from 'mobx-react';
import AddButton from './components/addButton';
import CurrentEvent from './components/currEventModal';
import CurrentDay from './components/currDaysEvents';

@inject('store')
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
        {this.props.store.modal ? <CurrentEvent /> : null}
        <CurrentDay />
        <AddButton />
      </div>
    );
  }
}

export default App;
