import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch, NavLink, useHistory, useParams } from 'react-router-dom'
import { seasons } from 'api'
import { Page, NavSub, Form, Select } from 'components'
import { SeasonLeaders, SeasonStandings, NoMatch } from 'pages'

const StyledSeasons = styled(Page)``

export const Season = () => {
  const history = useHistory()
  const {seasonSlug} = useParams()
  const [values, setValues] = useState({ season: seasonSlug })

  const handleChange = ({ target: { name, value } }) => {
    setValues(prevState => {
      return { ...prevState, [name]: value }
    })
    history.push(value)
  }

  useEffect(() => {
    setValues(prevState => {
      return { ...prevState, season: seasonSlug }
    })
  }, [seasonSlug])

  return (
    <StyledSeasons>
      <Form>
        <NavSub>
          <NavLink to={`/seasons/leaders/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/leaders')}>Leaders</NavLink>
          <NavLink to={`/seasons/standings/${seasonSlug}`} isActive={(_, loc) => loc.pathname.includes('/standings')}>Standings</NavLink>
        </NavSub>
        <Select options={seasons} label="Season" name="season" value={values.season} onChange={handleChange} />
      </Form>
      <Switch>
        <Route path={`/seasons/leaders`} render={props => <SeasonLeaders {...props} values={values} />} />
        <Route path={`/seasons/standings`} render={props => <SeasonStandings {...props} values={values} />} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledSeasons>
  )
}
