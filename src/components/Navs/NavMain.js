import React from 'react'
import { NavLink } from "react-router-dom"
import { Nav } from 'components'

export const NavMain = () => (
  <Nav>
    <NavLink exact to="/" > Home </NavLink>
    <NavLink exact to="/players" isActive={(_, loc) => (loc.pathname.includes("/players") ? true : false) }>Players</NavLink>
    <NavLink exact to="/standings" isActive={(_, loc) => (loc.pathname.includes("/standings") ? true : false) }>Standings</NavLink>
    <NavLink exact to="/teams/atl" isActive={(_, loc) => (loc.pathname.includes("/teams") ? true : false) }>Teams</NavLink>
  </Nav>
)
