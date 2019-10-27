import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { NavSub } from 'components'
import seasons from 'api/seasons'
import teams from 'api/teams'

export const NavSubTeams = () => {
  const match = useRouteMatch()

  return (
    <NavSub>
      <NavLink to={`${match.url}/standings/${seasons[0].value}`} isActive={(_, loc) => loc.pathname.includes('/standings')}>Standings</NavLink>
      <NavLink to={`${match.url}/roster/${teams[0].abbreviation}`} isActive={(_, loc) => loc.pathname.includes('/roster')}>Roster</NavLink>
      <NavLink to={`${match.url}/games`} isActive={(_, loc) => loc.pathname.includes('/games')}>Games</NavLink>
    </NavSub>
  )
}
