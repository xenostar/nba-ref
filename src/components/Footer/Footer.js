import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const StyledFooter = styled.footer`
  border-top: 1px solid #ccc;
  margin-top: auto;
  padding-top: 1.25rem;

  p {
    color: #bbb;
    cursor: default;
    font-size: 0.875em;
    user-select: none;
  }
`

export const Footer = () => (
  <StyledFooter>
    <p>Built with <FontAwesomeIcon icon={faHeart} />.</p>
  </StyledFooter>
)
