import React from 'react'
import { NavLink } from "react-router-dom"
import { Nav } from 'components'

export const NavMain = () => (
  <Nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/seasons/leaders" isActive={(_, loc) => (loc.pathname.includes("/seasons") ? true : false) }>Seasons</NavLink>
    <NavLink to="/teams/standings" isActive={(_, loc) => (loc.pathname.includes("/teams") ? true : false) }>Teams</NavLink>
    <NavLink to="/players/stats/lebron-james" isActive={(_, loc) => (loc.pathname.includes("/players") ? true : false) }>Players</NavLink>
  </Nav>
)
