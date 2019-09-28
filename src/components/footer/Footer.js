import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  border-top: 1px solid #ccc;
  padding-top: 1.25rem;

  p {
    color: #bbb;
    cursor: default;
    font-size: 0.875em;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <p>Footer copyright stuff. Built with love, etc.</p>
    </StyledFooter>
  )
}
