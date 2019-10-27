import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { Page, NavSubTeams } from 'components'
import { TeamsRoster, TeamsStandings, NoMatch } from 'pages'

const StyledTeam = styled(Page)``

export const Teams = () => {
  const match = useRouteMatch()

  return (
    <StyledTeam>
      <NavSubTeams />
      <Switch>
        <Route path={`${match.path}/standings`} component={TeamsStandings} />
        <Route path={`${match.path}/roster/:teamNameSlug`} component={TeamsRoster} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledTeam>
  )
}
