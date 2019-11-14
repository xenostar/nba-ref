import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Image } from 'components'
import logoImg from 'assets/img_nba-logo--orange.svg'

const StyledHeader = styled.header`
  margin-bottom: 2.5rem;

  a {
    align-items: center;
    display: inline-flex;
    float: left;
  }
  h1 {
    color: #444;
    font-size: 4em;
    line-height: 1;
    user-select: none;
  }
  h1 span {
    color: #ED5429;
  }
  img {
    height: 6rem;
    margin-right: 1.25rem;
    user-select: none;
    width: 2.63854375rem;
  }
`

export const Header = () => (
  <StyledHeader>
    <Link to="/">
      <Image src={logoImg} alt="nba-ref" />
      <h1>nba<span>ref</span></h1>
    </Link>
  </StyledHeader>
)
