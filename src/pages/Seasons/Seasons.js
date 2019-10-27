import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { Page, NavSubSeasons } from 'components'
import { SeasonsLeaders, NoMatch } from 'pages'
import seasons from 'api/seasons'

const StyledSeasons = styled(Page)``

export const Seasons = () => {
  const match = useRouteMatch()

  return (
    <StyledSeasons>
      <NavSubSeasons />
      <Switch>
        <Route path={`${match.path}/leaders/:seasonSlug`} component={SeasonsLeaders} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledSeasons>
  )
}
