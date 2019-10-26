import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { NavSub } from 'components'

export const NavSubSeasons = () => {
  const match = useRouteMatch()

  return (
    <NavSub>
      <NavLink to={`${match.url}/leaders`} isActive={(_, loc) => loc.pathname.includes("/leaders")}>Leaders</NavLink>
      <NavLink to={`${match.url}/news`} isActive={(_, loc) => loc.pathname.includes("/news")}>News</NavLink>
    </NavSub>
  )
}
