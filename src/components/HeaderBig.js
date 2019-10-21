import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { NavBig } from 'components'
import logo from 'img/nba-logo--orange.svg'

const StyledHeaderBig = styled.header`
  display: flex;
  align-items: stretch;
  overflow: hidden;

  h1 {
    color: #444;
    float: left;
    font-size: 4em;
    line-height: 7.5rem;
    user-select: none;
  }
  h1 span {
    color: #ED5429;
  }
  img {
    float: left;
    height: 7.5rem;
    margin-right: 1.25rem;
    user-select: none;
  }
`

export const HeaderBig = () => (
  <StyledHeaderBig>
    <Link to="/">
      <img src={logo} alt="nba-ref" />
      <h1>nba<span>ref</span></h1>
    </Link>
    <NavBig />
  </StyledHeaderBig>
)
