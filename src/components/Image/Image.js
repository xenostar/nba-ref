import React, { useState } from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  transition: opacity 1s;
  opacity: ${props => props.isLoaded ? (props.opacity ? props.opacity : 1) : 0 };
`

export const Image = ({alt, className, opacity, src}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleImgLoad = () => {
    setIsLoaded(true)
  }

  return (
    <StyledImage
      className={className}
      src={src}
      alt={alt}
      isLoaded={isLoaded}
      opacity={opacity}
      onLoad={handleImgLoad}
    />
  )
}
