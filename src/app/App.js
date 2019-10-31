import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, NavMain, Footer, ScrollToTop } from 'components'
import { Home, Season, Team, Player, NoMatch } from 'pages'
import './_Normalize.css'
import './_Reset.css'
import './_Global.css'

const StyledAppContainer = styled.div`
  background-color: rgba(255,255,255,0.85);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 90vw;
  min-height: 100vh;
  padding: 2.5rem;
  @media only screen and (max-width: 62.5rem) {
    min-width: 100%;
    padding: 2.5rem 1.25rem 5rem;
  }
`

const App = () => (
  <Router>
    <ScrollToTop />
    <StyledAppContainer>
      <Header />
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/seasons/:pageSlug?/:seasonSlug?" component={Season} />
        <Route path="/teams" component={Team} />
        <Route path="/players" component={Player} />
        <Route path="*" component={NoMatch} />
      </Switch>
      <Footer />
    </StyledAppContainer>
  </Router>
)

export default App
