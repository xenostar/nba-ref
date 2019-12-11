import React from 'react'
import styled from 'styled-components'

export const ErrorBoundary = props => {
  return (
    <StyledErrorBoundary>Error text will go here.</StyledErrorBoundary>
  )
}

const StyledErrorBoundary = styled.div`
  display: block;
`
