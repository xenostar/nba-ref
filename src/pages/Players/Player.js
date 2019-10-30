import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { Page } from 'components'
import { PlayerNav, PlayerCharts, PlayerStats, NoMatch } from 'pages'

const StyledPlayers = styled(Page)``

export const Player = () => {
  const match = useRouteMatch()

  return (
    <StyledPlayers>
      <PlayerNav />
      <Switch>
        <Route path={`${match.path}/stats/:playerNameSlug`} component={PlayerStats} />
        <Route path={`${match.path}/charts/:playerNameSlug`} component={PlayerCharts} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledPlayers>
  )
}
