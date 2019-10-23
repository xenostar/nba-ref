import React from 'react'
import { NavLink } from "react-router-dom"
import { NavSub } from 'components'

export const NavSubPlayers = () => (
  <NavSub>
    <NavLink to="/players/stats/lebron-james" isActive={(_, loc) => (loc.pathname.includes("/stats") ? true : false) }>Stats</NavLink>
    <NavLink to="/players/charts/lebron-james" isActive={(_, loc) => (loc.pathname.includes("/charts") ? true : false) }>Charts</NavLink>
    <NavLink to="/players/search" isActive={(_, loc) => (loc.pathname.includes("/search") ? true : false) }>Search</NavLink>
  </NavSub>
)
