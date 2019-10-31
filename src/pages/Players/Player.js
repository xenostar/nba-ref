import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, NavLink, useRouteMatch, useHistory, useParams } from 'react-router-dom'
import { Page, NavSub, Form, Select } from 'components'
import { PlayerCharts, PlayerStats, NoMatch } from 'pages'
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
        <NavSub>
          <NavLink to={`/players/stats/${playerSlug}/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/stats')}>Stats</NavLink>
          <NavLink to={`/players/charts/${playerSlug}/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/charts')}>Charts</NavLink>
        </NavSub>
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
