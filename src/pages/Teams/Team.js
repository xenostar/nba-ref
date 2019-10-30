import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { Page } from 'components'
import { TeamNav, TeamRoster, NoMatch } from 'pages'

const StyledTeam = styled(Page)``

export const Team = () => {
  const match = useRouteMatch()

  return (
    <StyledTeam>
      <TeamNav />
      <Switch>
        <Route path={`${match.path}/roster/:teamNameSlug`} component={TeamRoster} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledTeam>
  )
}
