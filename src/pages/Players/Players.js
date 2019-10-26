import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { NavSubPlayers} from 'components'
import { PlayersCharts, PlayersStats, NoMatch } from 'pages'

const StyledPlayers = styled.div``

export const Players = ({ match }) => (
  <StyledPlayers>
    <NavSubPlayers />
    <Switch>
      <Route path={match.url + "/stats/:playerNameSlug"} component={PlayersStats} />
      <Route path={match.url + "/charts/:playerNameSlug"} component={PlayersCharts} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </StyledPlayers>
)
