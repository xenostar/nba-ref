import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, NavMain, Footer, ScrollToTop } from 'components'
import { Home, Seasons, Teams, Players, NoMatch } from 'pages'
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
        <Route path="/seasons" component={Seasons} />
        <Route path="/teams" component={Teams} />
        <Route path="/players" component={Players} />
        <Route path="*" component={NoMatch} />
      </Switch>
      <Footer />
    </StyledAppContainer>
  </Router>
)

export default App
