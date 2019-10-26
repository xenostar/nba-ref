import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { NavSubSeasons } from 'components'
import { SeasonsLeaders, NoMatch } from 'pages'

const StyledSeasons = styled.div``

export const Seasons = () => {
  const match = useRouteMatch()

  return (
    <StyledSeasons>
      <NavSubSeasons />
      <Switch>
        <Route path={`${match.path}/leaders`} component={SeasonsLeaders} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledSeasons>
  )
}
