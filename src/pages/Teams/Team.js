import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, NavLink, useRouteMatch, useHistory, useParams } from 'react-router-dom'
import { seasonOptions, teamOptions } from 'api'
import { Page, NavSub, Form, Select } from 'components'
import { TeamGames, TeamRoster, NoMatch } from 'pages'

const StyledTeam = styled(Page)``

export const Team = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const { seasonSlug, teamSlug } = useParams()
  const [values, setValues] = useState({ team: teamSlug, season: seasonSlug })

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
    if (name === "team") {
      history.push(`/teams/${match.params.pageSlug}/${value}/${values.season}`)
    }
    if (name === "season") {
      history.push(`/teams/${match.params.pageSlug}/${values.team}/${value}`)
    }
  }

  useEffect(() => {
    setValues(prevState => {
      return { ...prevState, team: teamSlug, season: seasonSlug }
    })
  }, [seasonSlug,teamSlug])

  return (
    <StyledTeam>
      <Form>
        <NavSub>
          <NavLink to={`/teams/roster/${teamSlug}/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/roster')}>Roster</NavLink>
          <NavLink to={`/teams/games/${teamSlug}/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/games')}>Games</NavLink>
        </NavSub>
        <Select options={teamOptions} label="Team" name="team" value={values.team} onChange={handleChange} />
        <Select options={seasonOptions} label="Season" name="season" value={values.season} onChange={handleChange} />
      </Form>
      <Switch>
        <Route path={`/teams/roster`} render={props => <TeamRoster {...props} values={values} />} />
        <Route path={`/teams/games`} render={props => <TeamGames {...props} values={values} />} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledTeam>
  )
}
