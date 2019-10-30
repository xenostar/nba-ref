import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { NavSub } from 'components'

export const NavSubPlayers = () => {
  const match = useRouteMatch()

  return (
    <NavSub>
      <NavLink to={`${match.url}/stats`} isActive={(_, loc) => loc.pathname.includes('/stats')}>Stats</NavLink>
      <NavLink to={`${match.url}/charts`} isActive={(_, loc) => loc.pathname.includes('/charts')}>Charts</NavLink>
    </NavSub>
  )
}
