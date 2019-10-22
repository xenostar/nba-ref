import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Header, NavMain, Footer, ScrollToTop } from 'components'
import { Home, Player, Players, Standings, Teams, Test } from 'pages'
import './Normalize.css'
import './Reset.css'
import './App.css'

// App
const App = () => (
  <Router>
    <ScrollToTop />
    <div className="app-container">
      <Header />
      <NavMain />
      <Route exact path="/" component={Home} />
      <Route exact path="/players" component={Players} />
      <Route exact path="/players/:playerNameSlug" component={Player} />
      <Route exact path="/standings" component={Standings} />
      <Route exact path="/teams/:teamNameSlug" component={Teams} />
      <Route exact path="/test/:playerNameSlug" component={Test} />
      <Footer />
    </div>
  </Router>
)

export default App
