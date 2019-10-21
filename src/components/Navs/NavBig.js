import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const StyledNavBig = styled.nav`
  background-color: rgba(0,0,0,0.05);
  border-radius: 3px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  margin-left: auto;
  max-width: 600px;
  width: 100%;
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
    align-items: center;
    border-bottom: 5px solid transparent;
    color: #aaa;
    display: flex;
    font-weight: 700;
    /* height: 3.4375rem; */
    /* line-height: 3.4375rem; */
    /* text-align: center; */
    justify-content: center;
    text-transform: uppercase;
    transition: all 0.4s ease;
    padding: 0 1.25rem;
    user-select: none;
    width: 25%;
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

export const NavBig = () => (
  <StyledNavBig>
    <NavLink exact to="/">Home</NavLink>
    <NavLink exact to="/seasons">Seasons</NavLink>
    <NavLink exact to="/standings">Standings</NavLink>
    <NavLink
      to="/teams/atl"
      isActive={(_, location) => {
        if (location.pathname.includes("/teams/")) {
          return true
        } else {
          return false
        }
      }}
    >
      Teams
    </NavLink>
  </StyledNavBig>
)
