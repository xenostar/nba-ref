import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"

const StyledNav = styled.nav`
  background: rgba(0,0,0,0.05);
  border-radius: 3px;
  margin-bottom: 2.5rem;
  overflow: hidden;

  a {
    border-bottom: 5px solid transparent;
    color: #aaa;
    display: block;
    float: left;
    font-weight: 700;
    height: 3.4375rem;
    line-height: 3.4375rem;
    text-transform: uppercase;
    transition: all 0.4s ease-in-out;
    padding: 0 1.25rem;
  }
  a:hover {
    color: #888;
  }
  a.active {
    border-bottom: 5px solid #ED5429;
    color: #ED5429;
  }

  @media only screen and (max-width: 1000px) {
    a {
      border-bottom: none;
      border-left: 5px solid transparent;
      float: none;
    }
    a.active {
      border-bottom: none;
      border-left: 5px solid #ED5429;
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
