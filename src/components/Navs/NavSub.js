import React from 'react'
import { NavLink } from "react-router-dom"
import { Nav } from 'components'

export const NavSub = () => (
  <Nav>
    <NavLink exact to="/">Stats</NavLink>
    <NavLink exact to="/seasons">Charts</NavLink>
    <NavLink exact to="/standings">Something</NavLink>
  </Nav>
)
