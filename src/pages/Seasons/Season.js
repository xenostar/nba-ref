import React from 'react'
import styled from 'styled-components'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { Page } from 'components'
import { SeasonNav, SeasonLeaders, SeasonStandings, NoMatch } from 'pages'

const StyledSeasons = styled(Page)``

export const Season = () => {
  const match = useRouteMatch()

  return (
    <StyledSeasons>
      <SeasonNav />
      <Switch>
      <Route path={`${match.path}/standings/:seasonSlug`} component={SeasonStandings} />
        <Route path={`${match.path}/leaders/:seasonSlug`} component={SeasonLeaders} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </StyledSeasons>
  )
}
