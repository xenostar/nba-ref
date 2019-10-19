import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const StyledNav = styled.nav`
  background-color: rgba(0,0,0,0.05);
  border-radius: 3px;
  display: flex;
  margin-top: 2.5rem;
  overflow: hidden;
  @media only screen and (max-width: 62.5rem) {
    background-color: rgba(255,255,255,1);
    border-radius: 0;
    box-shadow: 0 3px 10px rgba(0,0,0,0.25);
    margin-top: 0;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }

  a {
    border-bottom: 5px solid transparent;
    color: #aaa;
    display: block;
    font-weight: 700;
    height: 3.4375rem;
    line-height: 3.4375rem;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.4s ease;
    padding: 0 1.25rem;
    user-select: none;
  }
  a:hover {
    color: #777;
  }
  a.active {
    border-bottom: 5px solid #ED5429;
    color: #ED5429;
  }
  a:active,
  a:focus,
  a:-moz-focus-inner,
  a:-moz-focus-outer,
  a:-moz-focusring {
    border: 0;
    outline: 0;
  }
  @media only screen and (max-width: 62.5rem) {
    a {
      font-size: 0.8em;
      padding: 0;
      width: 25%;
    }
  }
`

export const Nav = () => (
  <StyledNav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink exact to="/leaderboards">Leaderboards</NavLink>
    <NavLink exact to="/standings">Standings</NavLink>
    <NavLink exact to="/teams/atl">Teams</NavLink>
  </StyledNav>
)
