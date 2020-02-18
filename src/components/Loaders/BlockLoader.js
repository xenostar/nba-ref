import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

export const BlockLoader = props => {
  const [loaders, setLoaders] = useState([])

  useEffect(() => {
    let arr = []
    if (props.loaders !== undefined) {
      for (let i = 0; i < props.loaders; i++) {
        arr.push(i)
      }
    } else {
      arr = [0]
    }
    setLoaders(arr)
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

const slide = keyframes`
  0% { left: -16rem; }
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
  animation: ${slide} infinite 1s ease-in-out;
  animation-fill-mode: both;
  background: rgb(238,238,238);
  background: linear-gradient(90deg, rgba(238,238,238,1) 20%, rgba(255,255,255,0.5) 50%, rgba(238,238,238,1) 80%);
  position: absolute;
  bottom: 0;
  top: 0;
  width: 16rem;
`
