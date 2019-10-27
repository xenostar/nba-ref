import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { Page, NavSubPlayers } from 'components'
import { PlayersCharts, PlayersStats, NoMatch } from 'pages'

const StyledPlayers = styled(Page)``

export const Players = () => {
  const match = useRouteMatch()

  return (
    <StyledPlayers>
      <NavSubPlayers />
      <Switch>
        <Route path={`${match.path}/stats/:playerNameSlug`} component={PlayersStats} />
        <Route path={`${match.path}/charts/:playerNameSlug`} component={PlayersCharts} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledPlayers>
  )
}
