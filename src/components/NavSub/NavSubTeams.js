import React from 'react'
import { NavLink } from "react-router-dom"
import { NavSub } from 'components'

export const NavSubTeams = () => (
  <NavSub>
    <NavLink exact to="/teams/standings" isActive={(_, loc) => (loc.pathname.includes("/standings") ? true : false) }>Standings</NavLink>
    <NavLink exact to="/teams/roster/atl" isActive={(_, loc) => (loc.pathname.includes("/roster") ? true : false) }>Roster</NavLink>
    <NavLink exact to="/teams/games" isActive={(_, loc) => (loc.pathname.includes("/games") ? true : false) }>Games</NavLink>
  </NavSub>
)
