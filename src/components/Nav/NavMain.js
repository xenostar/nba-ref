import React from 'react'
import { NavLink } from "react-router-dom"
import { Nav } from 'components'
import { seasons, teams } from 'api'

export const NavMain = () => (
  <Nav>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink
      to={`/seasons/leaders/${seasons[0].value}`}
      isActive={(_, loc) => loc.pathname.includes('/seasons')}>
      Seasons
    </NavLink>
    <NavLink
      to={`/teams/roster/${Object.keys(teams)[0]}/${seasons[0].value}`}
      isActive={(_, loc) => loc.pathname.includes('/teams')}>
      Teams
    </NavLink>
    <NavLink
      to={`/players/stats/lebron-james/${seasons[0].value}`}
      isActive={(_, loc) => loc.pathname.includes('/players')}>
      Players
    </NavLink>
    <NavLink
      to={`/games`}
      isActive={(_, loc) => loc.pathname.includes('/games')}>
      Games
    </NavLink>
  </Nav>
)
