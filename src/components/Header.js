import React from 'react'
import styled from 'styled-components'
import logo from './img/nba-logo--orange.svg'

const StyledHeader = styled.header`
  overflow: hidden;
  margin-bottom: 2.5rem;

  img {
    height: 7.5rem;
    float: left;
    margin-right: 1.25rem;
  }
  h1 {
    cursor: default;
    float: left;
    font-size: 4em;
    line-height: 7.5rem;
  }
  h1 span {
    color: #ED5429;
  }
`

export const Header = () => (
  <StyledHeader>
    <img src={logo} alt="NBA REF" />
    <h1>nba<span>ref</span></h1>
  </StyledHeader>
)
