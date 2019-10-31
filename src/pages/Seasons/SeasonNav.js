import React from 'react'
// import { NavLink, useRouteMatch, useParams } from 'react-router-dom'
import { NavLink, useParams } from 'react-router-dom'
import { NavSub } from 'components'

export const SeasonNav = () => {
  const {seasonSlug} = useParams()

  return (
    <NavSub>
      <NavLink to={`/seasons/leaders/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/leaders')}>Leaders</NavLink>
      <NavLink to={`/seasons/standings/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/standings')}>Standings</NavLink>
    </NavSub>
  )
}
