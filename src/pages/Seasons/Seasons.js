import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { NavSubSeasons } from 'components'
import { SeasonsLeaders, NoMatch } from 'pages'

const StyledSeasons = styled.div``

export const Seasons = ({ match }) => (
  <StyledSeasons>
    <NavSubSeasons />
    <Switch>
      <Route path={match.url + "/leaders"} component={SeasonsLeaders} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </StyledSeasons>
)
