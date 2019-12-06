import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const slide = keyframes`
  0% { left: -3.75rem; }
  100% { left: 100%; }
`
const StyledBlockLoader = styled.div`
  background-color: #eee;
  border-radius: ${props => props.borderradius ? props.borderradius + 'px' : '5px'};
  height: ${props => props.height ? (props.height / 16) + 'em' : 'inherit'};
  overflow: hidden;
  position: relative;
  :before {
    content: ".";
    opacity: 0;
  }
`
const Gradient = styled.div`
  animation: ${slide} infinite 0.5s ease-in-out;
  animation-fill-mode: both;
  background: rgb(238,238,238);
  background: linear-gradient(90deg, rgba(238,238,238,1) 20%, rgba(255,255,255,1) 50%, rgba(238,238,238,1) 80%);
  position: absolute;
  bottom: 0;
  top: 0;
  left: -4rem;
  width: 4rem;
`

export const BlockLoader = props => {
  const [loaders, setLoaders] = useState([0])

  useEffect(() => {
    let arr = []
    if (props.loaders !== undefined) {
      for (let i = 0; i < props.loaders; i++) {
        arr.push(i)
      }
      setLoaders(arr)
    }
  }, [props.loaders])

  return (
    <>
      {loaders.map((index) => (
        <StyledBlockLoader key={index} height={props.height} borderradius={props.borderradius}>
          <Gradient></Gradient>
        </StyledBlockLoader>
      ))}
    </>
  )
}
