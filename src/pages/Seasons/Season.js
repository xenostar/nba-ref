import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch, useHistory, useParams } from 'react-router-dom'
import { Page, Form, Select } from 'components'
import { SeasonNav, SeasonLeaders, SeasonStandings, NoMatch } from 'pages'
import seasons from 'api/seasons'

const StyledSeasons = styled(Page)``

export const Season = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const {seasonSlug} = useParams()
  const [values, setValues] = useState({ season: seasonSlug })

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
    <StyledSeasons>
      <Form>
        <SeasonNav />
        <Select label="Season" name="season" value={values.season} onChange={handleChange}>
          {seasons.map(({name, value}) => (
            <option key={value} value={value}>{name}</option>
          ))}
        </Select>
      </Form>
      <Switch>
        <Route path={`${match.path}/leaders`} render={props => <SeasonLeaders {...props} values={values} />} />
        <Route path={`${match.path}/standings`} render={props => <SeasonStandings {...props} values={values} />} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledSeasons>
  )
}
