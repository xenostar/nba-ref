import React from 'react'
// import { NavLink, useRouteMatch, useParams } from 'react-router-dom'
import { NavLink, useParams } from 'react-router-dom'
import { NavSub } from 'components'

export const PlayerNav = () => {
  // const match = useRouteMatch()
  const {seasonSlug} = useParams()
  const {playerSlug} = useParams()

  return (
    <NavSub>
      <NavLink to={`/players/stats/${playerSlug}/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/stats')}>Stats</NavLink>
      <NavLink to={`/players/charts/${playerSlug}/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/charts')}>Charts</NavLink>
    </NavSub>
  )
}
