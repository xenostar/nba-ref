import React from 'react'
import styled, { keyframes } from 'styled-components'
import loaderImg from 'img/img_basketball.svg'

const fadeInOut = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`

const StyledLoader = styled.div`
  display: flex;
  /* min-height: 24.3125rem; */
  justify-content: center;

  .holder {
    align-self: center;
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
  img {
    margin: 0 auto;
  }
`

export const Loader = ({ loaderHeight })  => (
  <StyledLoader style={{ minHeight: (loaderHeight * 2.434375) + 'rem' }}>
    <div className="holder">
      <img src={loaderImg} alt="Loading..." />
      <p>Loading</p>
    </div>
  </StyledLoader>
)
