import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home title="Oscar Winners"/>
      </div>
    );
  }
}

export default App;