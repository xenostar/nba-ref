import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, NavMain, Footer, ScrollToTop } from 'components'
import { Home, Seasons, Teams, Players, NoMatch } from 'pages'
import './Normalize.css'
import './Reset.css'
import './App.css'

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <div className="app-container">
      <Header />
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/seasons" component={Seasons} />
        <Route path="/teams" component={Teams} />
        <Route path="/players" component={Players} />
        <Route path="*" component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
