import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const StyledNav = styled.nav`
  background-color: rgba(0,0,0,0.05);
  border-radius: 3px;
  display: flex;
  margin-top: 2.5rem;
  overflow: hidden;

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
  }
  a:hover {
    color: #777;
  }
  a.active {
    border-bottom: 5px solid #ED5429;
    color: #ED5429;
  }

  @media only screen and (max-width: 1000px) {
    background-color: rgba(255,255,255,1);
    border-radius: 0;
    box-shadow: 0 3px 10px rgba(0,0,0,0.25);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    margin-top: 0;
    z-index: 1000;

    a {
      font-size: 0.8em;
      padding: 0;
      width: 25%;
    }
  }
`

export const Nav = () => (
  <StyledNav>
    <NavLink exact to="/" activeClassName="active">Home</NavLink>
    <NavLink exact to="/players" activeClassName="active">Players</NavLink>
    <NavLink exact to="/standings" activeClassName="active">Standings</NavLink>
    <NavLink exact to="/teams" activeClassName="active">Teams</NavLink>
  </StyledNav>
)
