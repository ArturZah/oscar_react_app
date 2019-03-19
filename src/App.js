import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Actors from './components/Actors';
import Actress from './components/Actress';
import Films from './components/Films';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={ () => <Home title="Oscar Winners"/> } />
          <Route path="/actors" render={ () => <Actors title="Best Actors"/> } />
          <Route path="/actress" render={ () => <Actress title="Best Actress"/> } />
          <Route path="/films" render={ () => <Films title="Best Films"/> } />
        </div>
      </Router>
    );
  }
}

export default App;