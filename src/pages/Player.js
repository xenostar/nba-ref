import React, { useEffect } from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.div``

export const Player = ({ match }) => {

  useEffect(() => { // componentDidMount
    console.log("Running...")
    return () => console.log('Unmounting...')
  }, [])

  return (
    <StyledPlayer className="page">
      <div>Player page for {match.params.playername}</div>
    </StyledPlayer>
  )
}
