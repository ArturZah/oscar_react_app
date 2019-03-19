import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ActorCnt from './components/ActorCnt';
import Actress from './components/Actress';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={ () => <Home title="Oscar Winners"/> } />
          <Route path="/actors" render={ () => <ActorCnt /> } />
          <Route path="/actress" render={ () => <Actress title="Best Actress"/> } />
        </div>
      </Router>
    );
  }
}

export default App;