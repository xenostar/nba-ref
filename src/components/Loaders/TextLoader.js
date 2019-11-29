import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { getRandomInt } from 'utils'

const slide = keyframes`
  0% { left: -3.75rem; }
  100% { left: 100%; }
`
const StyledTextLoader = styled.div`
  background-color: #eee;
  border-radius: ${props => props.borderradius ? props.borderradius + 'px' : '2px'};
  height: inherit;
  line-height: inherit;
  overflow: hidden;
  position: relative;
  width: ${props => props.width + '%'};
  :before {
    content: ".";
    opacity: 0;
  }
`
const Gradient = styled.div`
  animation: ${slide} infinite 0.4s ease-in-out;
  animation-fill-mode: both;
  background: rgb(238,238,238);
  background: linear-gradient(90deg, rgba(238,238,238,1) 20%, rgba(255,255,255,1) 50%, rgba(238,238,238,1) 80%);
  position: absolute;
  bottom: 0;
  top: 0;
  left: -4rem;
  width: 4rem;
`

export const TextLoader = props => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(getRandomInt(25,60))
  }, [])

  return (
    <StyledTextLoader borderradius={props.borderradius} width={width}>
      <Gradient></Gradient>
    </StyledTextLoader>
  )
}
