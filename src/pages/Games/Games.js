import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch, useHistory, useParams } from 'react-router-dom'
import { seasonOptions } from 'api'
import { Page, Form, Select } from 'components'
import { GamesSingle, GamesToday, NoMatch } from 'pages'

export const Games = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const { seasonSlug } = useParams()
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
        <Select options={seasonOptions} label="Season" name="season" value={values.season} onChange={handleChange} />
      </Form>
      <Switch>
        <Route path={`/games/today`} render={props => <GamesToday {...props} values={values} />} />
        <Route path={`/games/single/${idSlug}`} render={props => <GamesSingle {...props} values={values} />} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledTeam>
  )
}

const StyledTeam = styled(Page)``
