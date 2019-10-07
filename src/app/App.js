import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Header, Nav, Footer } from 'components'
import { Home, Players, Player, Standings, Teams } from 'pages'
import './Reset.css'
import './App.css'

// App
const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/players" component={Players} />
      <Route path="/player/:playername" component={Player} />
      <Route path="/standings" component={Standings} />
      <Route path="/teams" component={Teams} />
      <Footer />
    </div>
  </Router>
)

export default App
