import React, { useState } from 'react'
import styled from 'styled-components'

export const Image = props => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleImgLoad = () => {
    setIsLoaded(true)
  }

  return (
    <StyledImage
      className={props.className}
      src={props.src}
      alt={props.alt}
      opacity={props.opacity}
      isLoaded={isLoaded}
      onLoad={handleImgLoad}
    />
  )
}

const StyledImage = styled.img`
  transition: opacity 1s;
  opacity: ${props => props.isLoaded ? (props.opacity ? props.opacity : 1) : 0};
`
