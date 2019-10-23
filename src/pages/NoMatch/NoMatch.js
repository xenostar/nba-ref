import React from 'react'
import { useLocation } from "react-router-dom"
import styled from 'styled-components'

const StyledNoMatch = styled.div``

export const NoMatch = () => {
  const location = useLocation();

  return (
    <StyledNoMatch className="page">
      <h1>Oops!</h1>
      <p>No page found for <code>{location.pathname}</code>.</p>
    </StyledNoMatch>
  )
}
