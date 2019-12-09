import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, NavLink, useHistory, useParams } from 'react-router-dom'
import { Page, NavSub, Form, Select } from 'components'
import { PlayerCharts, PlayerStats, NoMatch } from 'pages'
import { seasons } from 'api'

const StyledPlayers = styled(Page)``

export const Player = () => {
  const history = useHistory()
  const {playerSlug} = useParams()
  const {seasonSlug} = useParams()
  const [values, setValues] = useState({ player: playerSlug, season: seasonSlug })

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
    history.push(value)
  }

  useEffect(() => {
    setValues(prevState => {
      return { ...prevState, player: playerSlug, season: seasonSlug }
    })
  }, [playerSlug,seasonSlug])

  return (
    <StyledPlayers>
      <Form>
        <NavSub>
          <NavLink to={`/players/stats/${playerSlug}/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/stats')}>Stats</NavLink>
          <NavLink to={`/players/charts/${playerSlug}/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/charts')}>Charts</NavLink>
          <NavLink to={`/players/games/${playerSlug}/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/games')}>Games</NavLink>
        </NavSub>
        <Select options={seasons} label="Season" name="season" value={values.season} onChange={handleChange} />
      </Form>
      <Switch>
        <Route path={`/players/stats`} render={props => <PlayerStats {...props} values={values} />} />
        <Route path={`/players/charts`} render={props => <PlayerCharts {...props} values={values} />} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledPlayers>
  )
}
