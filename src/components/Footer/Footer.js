import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const StyledFooter = styled.footer`
  margin-top: auto;

  div {
    margin-top: 5rem;
    border-top: 1px solid #ccc;
    padding-top: 1.25rem;
  }
  p {
    color: #bbb;
    cursor: default;
    font-size: 0.875em;
    user-select: none;
  }
`

export const Footer = () => (
  <StyledFooter>
    <div>
      <p>Built with <FontAwesomeIcon icon={faHeart} /> by <a href="https://github.com/xenostar" target="_blank" rel="noopener noreferrer">Xenostar</a>.</p>
    </div>
  </StyledFooter>
)
