import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Header, Nav, Footer } from 'components'
import { Home, Leaderboards, Player, Standings, Teams, Test } from 'pages'
import './Reset.css'
import './App.css'

// App
const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/leaderboards" component={Leaderboards} />
      <Route path="/player/:playerNameSlug" component={Player} />
      <Route path="/standings" component={Standings} />
      <Route path="/teams" component={Teams} />
      <Route path="/test/:teamNameSlug" component={Test} />
      <Footer />
    </div>
  </Router>
)

export default App
