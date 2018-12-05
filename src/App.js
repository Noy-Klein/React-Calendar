import React, { Component } from 'react';
import './cssFiles/App.css';
// import Timer from './components/timer';
import Table from './components/table';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Timer /> */}
        <Table />
      </div>
    );
  }
}

export default App;
