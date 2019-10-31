import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch, useHistory, useParams } from 'react-router-dom'
import { Page, Form, Select } from 'components'
import { PlayerNav, PlayerCharts, PlayerStats, NoMatch } from 'pages'
import seasons from 'api/seasons'

const StyledPlayers = styled(Page)``

export const Player = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const {playerSlug} = useParams()
  const {seasonSlug} = useParams()
  const [values, setValues] = useState({ player: playerSlug, season: seasonSlug })

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
    if (name === "season") {
      console.log(value)
      history.push(value)
    }
  }

  useEffect(() => {
    setValues(prevState => {
      return { ...prevState, season: seasonSlug }
    })
  }, [seasonSlug])

  return (
    <StyledPlayers>
      <Form>
        <PlayerNav />
        <Select label="Season" name="season" value={values.season} onChange={handleChange}>
          {seasons.map(({name, value}) => (
            <option key={value} value={value}>{name}</option>
          ))}
        </Select>
      </Form>
      <Switch>
        <Route path={`${match.path}/stats/:playerSlug/:seasonSlug`} render={props => <PlayerStats {...props} values={values} />} />
        <Route path={`${match.path}/charts/:playerSlug/:seasonSlug`} render={props => <PlayerCharts {...props} values={values} />} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledPlayers>
  )
}
