import React from 'react'
// import { NavLink, useRouteMatch, useParams } from 'react-router-dom'
import { NavLink, useParams } from 'react-router-dom'
import { NavSub } from 'components'

export const TeamNav = () => {
  // const match = useRouteMatch()
  const {teamSlug} = useParams()

  return (
    <NavSub>
      <NavLink to={`/teams/roster/${teamSlug}`} isActive={(_, loc) => loc.pathname.includes('/roster')}>Roster</NavLink>
      <NavLink to={`/teams/games/${teamSlug}`} isActive={(_, loc) => loc.pathname.includes('/games')}>Games</NavLink>
    </NavSub>
  )
}
