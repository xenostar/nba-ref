import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Header, NavMain, Footer, ScrollToTop } from 'components'
import { Home, Seasons, Teams, Players, NoMatch } from 'pages'
import './Normalize.css'
import './Reset.css'
import './App.css'

const App = () => (
  <Router>
    <ScrollToTop />
    <div className="app-container">
      <Header />
      <NavMain />
      <Route exact path="/" component={Home} />
      <Route path="/:root" render={props => {
        return (
          <Switch>
            <Route path="/seasons" component={Seasons} />
            <Route path="/teams" component={Teams} />
            <Route path="/players" component={Players} />
            <Route path="*" component={NoMatch} />
          </Switch>
        )
      }}/>
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/seasons" component={Seasons} />
        <Route path="/teams" component={Teams} />
        <Route path="/players" component={Players} />
        <Route path="*" component={NoMatch} />
      </Switch> */}
      {/* <Route exact path="/players" component={Players} />
      <Route exact path="/players/:playerNameSlug" component={Player} />
      <Route exact path="/standings" component={Standings} />
      <Route exact path="/teams/:teamNameSlug" component={Teams} />
      <Route exact path="/test/:playerNameSlug" component={Test} /> */}
      <Footer />
    </div>
  </Router>
)

export default App
