import React from 'react'
import styled, { keyframes } from 'styled-components'
import loaderImg from 'assets/img_basketball.svg'

const fadeInOut = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`
const StyledBasketballLoader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  min-height: ${props => props.loaderHeight * 2.434375 + 'rem'};
  user-select: none;

  p {
    animation: ${fadeInOut} infinite 1s ease-in-out;
    animation-fill-mode: both;
    color: #bbb;
    font-size: 0.875em;
    font-weight: 800;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    margin: 0 auto;
  }
`

export const BasketballLoader = ({ loaderHeight })  => (
  <StyledBasketballLoader loaderHeight={loaderHeight}>
    <img src={loaderImg} alt="Loading" draggable="false" />
    <p>Loading</p>
  </StyledBasketballLoader>
)
