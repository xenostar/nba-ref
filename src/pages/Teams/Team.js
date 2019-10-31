import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch, useHistory, useParams } from 'react-router-dom'
import { Page, Form, Select } from 'components'
import { TeamNav, TeamRoster, NoMatch } from 'pages'
import seasons from 'api/seasons'
import teams from 'api/teams'

const StyledTeam = styled(Page)``

export const Team = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const {teamSlug} = useParams()
  const [values, setValues] = useState({ team: teamSlug, season: seasons[0].value })

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
    if (name === "team") {
      history.push(value)
    }
  }

  useEffect(() => {
    setValues(prevState => {
      return { ...prevState, team: teamSlug }
    })
  }, [teamSlug])

  return (
    <StyledTeam>
      <Form>
        <TeamNav />
        <Select label="Team" name="team" value={values.team} onChange={handleChange}>
          {teams.map(data => (
            <option key={data.name} value={data.abbreviation}>{data.city + ' ' + data.name}</option>
          ))}
        </Select>
        <Select label="Season" name="season" value={values.season} onChange={handleChange}>
          {seasons.map(({name, value}) => (
            <option key={value} value={value}>{name}</option>
          ))}
        </Select>
      </Form>
      <Switch>
        <Route path={`${match.path}/roster`} render={props => <TeamRoster {...props} values={values} />} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledTeam>
  )
}
