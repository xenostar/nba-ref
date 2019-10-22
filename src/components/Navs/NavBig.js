import React from 'react'
import { NavLink } from "react-router-dom"
import { Nav } from 'components'

export const NavBig = () => (
  <Nav>
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
  </Nav>
)
