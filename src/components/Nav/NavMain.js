import React from 'react'
import { NavLink } from "react-router-dom"
import { Nav } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketballBall, faHome, faCalendarAlt, faUsers, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { seasonOptions, teamData } from 'api'

export const NavMain = () => (
  <Nav>
    <NavLink exact to="/">
      <FontAwesomeIcon icon={faHome} />
      <span>Home</span>
    </NavLink>
    <NavLink
      to={`/seasons/leaders/${seasonOptions[0].value}`}
      isActive={(_, loc) => loc.pathname.startsWith('/seasons')}>
      <FontAwesomeIcon icon={faTrophy} />
      <span>Seasons</span>
    </NavLink>
    <NavLink
      to={`/teams/roster/${Object.keys(teamData)[0]}/${seasonOptions[0].value}`}
      isActive={(_, loc) => loc.pathname.startsWith('/teams')}>
      <FontAwesomeIcon icon={faBasketballBall} />
      <span>Teams</span>
    </NavLink>
    <NavLink
      to={`/players/stats/lebron-james/${seasonOptions[0].value}`}
      isActive={(_, loc) => loc.pathname.startsWith('/players')}>
      <FontAwesomeIcon icon={faUsers} />
      <span>Players</span>
    </NavLink>
    <NavLink
      to={`/games`}
      isActive={(_, loc) => loc.pathname.startsWith('/games')}>
      <FontAwesomeIcon icon={faCalendarAlt} />
      <span>Games</span>
    </NavLink>
  </Nav>
)
