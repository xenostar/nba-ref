import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Header, Nav, Footer } from 'components'
import { Home, Seasons, Player, Standings, Teams, Test } from 'pages'
import './Normalize.css'
import './Reset.css'
import './App.css'

// App
const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/seasons" component={Seasons} />
      <Route path="/player/:playerNameSlug" component={Player} />
      <Route path="/standings" component={Standings} />
      <Route path="/teams/:teamNameSlug" component={Teams} />
      <Route path="/test/:playerNameSlug" component={Test} />
      <Footer />
    </div>
  </Router>
)

export default App
