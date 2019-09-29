import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import About from './components/About'
import Navbar from './components/CustomNavbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
        </div>
      </Router>
    )
  }
}

export default App;
