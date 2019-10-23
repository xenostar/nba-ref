import React from 'react'
import { NavLink } from "react-router-dom"
import { NavSub } from 'components'

export const NavSubSeasons = () => (
  <NavSub>
    <NavLink to="/seasons/leaders" isActive={(_, loc) => (loc.pathname.includes("/leaders") ? true : false) }>Leaders</NavLink>
    <NavLink to="/seasons/news" isActive={(_, loc) => (loc.pathname.includes("/news") ? true : false) }>News</NavLink>
  </NavSub>
)
