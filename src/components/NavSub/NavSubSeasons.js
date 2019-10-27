import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { NavSub } from 'components'
import seasons from 'api/seasons'

export const NavSubSeasons = () => {
  const match = useRouteMatch()

  return (
    <NavSub>
      <NavLink to={`${match.url}/leaders/${seasons[0].value}`} isActive={(_, loc) => loc.pathname.includes('/leaders')}>Leaders</NavLink>
      <NavLink to={`${match.url}/news`} isActive={(_, loc) => loc.pathname.includes('/news')}>News</NavLink>
    </NavSub>
  )
}
