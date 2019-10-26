import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { NavSub } from 'components'

export const NavSubTeams = () => {
  const match = useRouteMatch()

  return (
    <NavSub>
      <NavLink to={`${match.url}/standings`} isActive={(_, loc) => loc.pathname.includes("/standings")}>Standings</NavLink>
      <NavLink to={`${match.url}/roster`} isActive={(_, loc) => loc.pathname.includes("/roster")}>Roster</NavLink>
      <NavLink to={`${match.url}/games`} isActive={(_, loc) => loc.pathname.includes("/games")}>Games</NavLink>
    </NavSub>
  )
}
