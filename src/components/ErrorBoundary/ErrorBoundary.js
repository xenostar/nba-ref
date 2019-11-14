import React from 'react'
import styled from 'styled-components'

const StyledErrorBoundary = styled.div`
  display: block;
`

export const ErrorBoundary = props => {
  return (
    <StyledErrorBoundary>Error text will go here.</StyledErrorBoundary>
  )
}
