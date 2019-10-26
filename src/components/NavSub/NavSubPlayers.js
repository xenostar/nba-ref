import React from 'react'
import { NavLink } from "react-router-dom"
import { NavSub } from 'components'

export const NavSubPlayers = () => (
  <NavSub>
    <NavLink to="/players/stats" isActive={(_, loc) => loc.pathname.includes("/stats") }>Stats</NavLink>
    <NavLink to="/players/charts" isActive={(_, loc) => loc.pathname.includes("/charts") }>Charts</NavLink>
    <NavLink to="/players/search" isActive={(_, loc) => loc.pathname.includes("/search") }>Search</NavLink>
  </NavSub>
)
