import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, NavMain, Footer, ScrollToTop, NormalizeStyle, ResetStyle, GlobalStyle } from 'components'
// import { Header, NavMain, Footer, PasswordModal, ScrollToTop } from 'components'
import { Home, Season, Team, Player, NoMatch } from 'pages'

const App = () => (
  <BrowserRouter>
    <NormalizeStyle />
    <ResetStyle />
    <GlobalStyle />
    <ScrollToTop />
    <StyledAppContainer>
      <Header />
      <NavMain />
      <Switch>
        <Route path="/seasons/:pageSlug/:seasonSlug" component={Season} />
        <Route path="/teams/:pageSlug/:teamSlug/:seasonSlug" component={Team} />
        <Route path="/players/:pageSlug/:playerSlug/:seasonSlug" component={Player} />
        <Route path="/" component={Home} exact />
        <Route path="*" component={NoMatch} />
      </Switch>
      {/* <Route path="/" component={Home} exact />
      <Route path="/:root" render={props => {
        return (
          <Switch>
            <Route path="/seasons/:pageSlug/:seasonSlug" {...props} component={Season} />
            <Route path="/teams/:pageSlug/:teamSlug/:seasonSlug" component={Team} />
            <Route path="/players/:pageSlug/:playerSlug/:seasonSlug" component={Player} />
            <Route path="*" component={NoMatch} />
          </Switch>
        )
      }}/> */}
      <Footer />
    </StyledAppContainer>
    {/* <PasswordModal /> */}
  </BrowserRouter>
)

export default App

const StyledAppContainer = styled.div`
  background-color: rgba(255,255,255,0.85);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 90vw;
  min-height: 100vh;
  padding: 1.875rem;
  position: relative;
  @media only screen and (max-width: 62.5rem) {
    min-width: 100%;
    padding: 1.875rem 0.9375rem 5.3125rem;
  }
`
