import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { Page, NavSubPlayers } from 'components'
import { PlayerCharts, PlayerStats, NoMatch } from 'pages'

const StyledPlayers = styled(Page)``

export const Player = () => {
  const match = useRouteMatch()

  return (
    <StyledPlayers>
      <NavSubPlayers />
      <Switch>
        <Route path={`${match.path}/stats/:playerNameSlug`} component={PlayerStats} />
        <Route path={`${match.path}/charts/:playerNameSlug`} component={PlayerCharts} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledPlayers>
  )
}
