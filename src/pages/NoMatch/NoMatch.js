import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Page } from 'components'

const StyledNoMatch = styled(Page)``

export const NoMatch = () => {
  const location = useLocation()

  return (
    <StyledNoMatch className="content">
      <h1>Oops!</h1>
      <p>No page found for <code>{location.pathname}</code>.</p>
    </StyledNoMatch>
  )
}
