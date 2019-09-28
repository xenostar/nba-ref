import React from 'react'
import styled, { keyframes } from 'styled-components'
import loader from './img/Basketball-1s-200px.svg'

const fadeInOut = keyframes`
  0% { opacity: 0.75; }
  50% { opacity: 1; }
  100% { opacity: 0.75; }
`

const StyledLoader = styled.div`
  display: flex;
  min-height: 22.5rem;
  justify-content: center;

  .holder {
    align-self: center;
  }
  img {
    margin: 0 auto;
  }
  p {
    animation: ${fadeInOut} infinite 1s ease-in-out;
    animation-fill-mode: both;
    color: #bbb;
    font-size: 0.875em;
    font-weight: 500;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
  }
`

export default function Loader() {
  return (
    <StyledLoader>
      <div className="holder">
        <img src={loader} alt="Loading..." />
        <p>Loading</p>
      </div>
    </StyledLoader>
  )
}
