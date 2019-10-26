import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { NavSubTeams} from 'components'
import { TeamsRoster, TeamsStandings, NoMatch } from 'pages'

const StyledTeam = styled.div``

export const Teams = ({ match }) => {
  return (
    <StyledTeam>
      <NavSubTeams />
      <Switch>
        <Route path={match.url + "/standings"} component={TeamsStandings} />
        <Route path={match.url + "/roster/:teamNameSlug"} component={TeamsRoster} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledTeam>
  )
}
