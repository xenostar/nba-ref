import React from 'react'
import { NavLink } from "react-router-dom"
import { NavSub } from 'components'

export const NavSubSeasons = () => (
  <NavSub>
    <NavLink to="/seasons/leaders" isActive={(_, loc) => loc.pathname.includes("/leaders") }>Leaders</NavLink>
    <NavLink to="/seasons/news" isActive={(_, loc) => loc.pathname.includes("/news") }>News</NavLink>
  </NavSub>
)
