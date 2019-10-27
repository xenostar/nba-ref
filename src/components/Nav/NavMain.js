import React from 'react'
import { NavLink } from "react-router-dom"
import { Nav } from 'components'
import seasons from 'api/seasons'

export const NavMain = () => (
  <Nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to={`/seasons/leaders/${seasons[0].value}`} isActive={(_, loc) => loc.pathname.includes('/seasons')}>Seasons</NavLink>
    <NavLink to={`/teams/standings/${seasons[0].value}`} isActive={(_, loc) => loc.pathname.includes('/teams')}>Teams</NavLink>
    <NavLink to="/players/stats" isActive={(_, loc) => loc.pathname.includes('/players')}>Players</NavLink>
  </Nav>
)
