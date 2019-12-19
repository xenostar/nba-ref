import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, useHistory, useParams } from 'react-router-dom'
import { dateOptions } from 'api'
import { Page, Form, Select } from 'components'
import { GamesSingle, GamesOnDate, NoMatch } from 'pages'

export const Game = () => {
  const history = useHistory()
  const { dateSlug } = useParams()
  const [values, setValues] = useState({ date: dateSlug })

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
    history.push(value)
  }

  useEffect(() => {
    setValues(prevState => {
      return { ...prevState, season: dateSlug }
    })
  }, [dateSlug])

  return (
    <StyledTeam>
      <Form>
        <Select options={dateOptions} label="Date" name="date" value={values.date} onChange={handleChange} />
      </Form>
      <Switch>
        <Route path={`/games/date/${dateSlug}`} render={props => <GamesOnDate {...props} values={values} />} />
        <Route path={`/games/single`} render={props => <GamesSingle {...props} values={values} />} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledTeam>
  )
}

const StyledTeam = styled(Page)``
