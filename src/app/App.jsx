import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

// CSS
import './Reset.css'
import './App.css'

// Components
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'

// Pages
import Home from '../pages/home/Home'
import Players from '../pages/players/Players'
import Standings from '../pages/standings/Standings'
import Teams from '../pages/teams/Teams'
import Profile from '../pages/profile/Profile'

// App
export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/players" component={Players} />
          <Route path="/standings" component={Standings} />
          <Route path="/teams" component={Teams} />
          <Route path="/profile" component={Profile} />
          <Footer />
        </div>
      </Router>
    )
  }

}
