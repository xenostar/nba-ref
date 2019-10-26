import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logoImg from 'img/img_nba-logo--orange.svg'

const StyledHeader = styled.header`
  overflow: hidden;

  a {
    float: left;
  }
  h1 {
    color: #444;
    float: left;
    font-size: 4em;
    line-height: 6rem;
    user-select: none;
  }
  h1 span {
    color: #ED5429;
  }
  img {
    float: left;
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
