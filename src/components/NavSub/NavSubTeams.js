import React from 'react'
import { NavLink } from "react-router-dom"
import { NavSub } from 'components'

export const NavSubTeams = () => (
  <NavSub>
    <NavLink to="/teams/standings" isActive={(_, loc) => loc.pathname.includes("/standings") }>Standings</NavLink>
    <NavLink to="/teams/roster" isActive={(_, loc) => loc.pathname.includes("/roster") }>Roster</NavLink>
    <NavLink to="/teams/games" isActive={(_, loc) => loc.pathname.includes("/games") }>Games</NavLink>
  </NavSub>
)
