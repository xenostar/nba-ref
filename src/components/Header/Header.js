import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoImg from 'img/img_nba-logo--orange.svg'

const StyledHeader = styled.header`
  margin-bottom: 2.5rem;

  a {
    display: inline-flex;
    float: left;
  }
  h1 {
    color: #444;
    font-size: 4em;
    user-select: none;
  }
  h1 span {
    color: #ED5429;
  }
  img {
    height: 6rem;
    margin-right: 1.25rem;
    user-select: none;
  }
`

export const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img src={logoImg} alt="nba-ref" />
      <h1>nba<span>ref</span></h1>
    </Link>
  </StyledHeader>
)
