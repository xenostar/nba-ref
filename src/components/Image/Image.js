import React, { useState } from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  transition: opacity 1s;
  opacity: ${props => props.isLoaded ? '1' : '0'};
`

export const Image = ({className, src, alt}) => {
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
      onLoad={handleImgLoad}
    />
  )
}
