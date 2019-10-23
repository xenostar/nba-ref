import React from 'react'
import { Route, Switch } from "react-router-dom"
import styled from 'styled-components'
import { NavSubPlayers} from 'components'
import { PlayersCharts, PlayersStats, NoMatch } from 'pages'

const StyledTeam = styled.div``

export const Players = ({ match }) => {
  return (
    <StyledTeam>
      <NavSubPlayers />
      <Switch>
        <Route path={match.url + "/stats/:playerNameSlug"} component={PlayersStats} />
        <Route path={match.url + "/charts/:playerNameSlug"} component={PlayersCharts} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledTeam>
  )
}
