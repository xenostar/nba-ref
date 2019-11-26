import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch, useHistory, useParams } from 'react-router-dom'
import { seasons } from 'api'
import { Page, Form, Select } from 'components'
import { TeamGames, TeamRoster, NoMatch } from 'pages'

const StyledTeam = styled(Page)``

export const Games = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const {seasonSlug} = useParams()
  const [values, setValues] = useState({ season: seasonSlug })

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
        <Select label="Season" name="season" value={values.season} onChange={handleChange}>
          {seasons.map(({name, value}) => (
            <option key={value} value={value}>{name}</option>
          ))}
        </Select>
      </Form>
      <Switch>
        <Route path={`/games/today`} render={props => <TeamRoster {...props} values={values} />} />
        <Route path={`/games/games`} render={props => <TeamGames {...props} values={values} />} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledTeam>
  )
}
