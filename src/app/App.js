import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, NavMain, Footer, ScrollToTop } from 'components'
// import { Header, NavMain, Footer, PasswordModal, ScrollToTop } from 'components'
import { Home, Season, Team, Player, NoMatch } from 'pages'
import BackgroundImage from 'assets/bg_funky-lines.png'
import './_Normalize.css'
import './_Reset.css'

const App = () => (
  <BrowserRouter>
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

const GlobalStyle = createGlobalStyle`
  html {
    color: #444;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1em;
    font-style: normal;
    font-weight: 400;
  }
  body {
    background-image: url(${BackgroundImage});
    overflow-y: scroll;
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.5;
  }
  a {
    color: #ED5429;
    text-decoration: none;
  }
  p, ol, ul {
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.5;
  }
  ul {
    list-style-position: inside;
    list-style-type: disc;
  }
  ol {
    list-style-position:  inside;
  }
  code {
    background-color: #ED5429;
    border-radius: 3px;
    color: #fff;
    padding: 5px 3px;
  }
`

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
