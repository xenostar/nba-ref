import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

const StyledPlayerCard = styled.div`
  display: grid;
  margin-bottom: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 2.5rem;
  grid-template-areas:
    "frame name name"
    "frame info info"
    "frame info info"
    "frame info info"
  ;
  @media only screen and (max-width: 37.5rem) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 1.25rem;
    grid-template-areas:
      "name"
      "frame"
      "info"
    ;
  }

  .pcard__frame {
    display: flex;
    grid-area: frame;
  }
  .pcard__name {
    grid-area: name;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .pcard__info {
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pcard-img {
    background-color: rgba(0,0,0,0.05);
    border: 1px solid #ddd;
    border-radius: 3px;
    position: relative;
    padding-top: 60%;
    overflow: hidden;
    width: 100%;
  }
  .pcard-img__bg {
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  .pcard-img__bg--loaded {
    animation: ${fadeIn} 0.4s;
    animation-fill-mode: both;
  }
`

export const PlayerCard = ({ playerInfo, isLoaded }) => {
  const playerImage = {
    backgroundImage: `url(${playerInfo.officialImageSrc})`
  }
  return (
    <StyledPlayerCard>
      <div className="pcard__frame">
        <div className="pcard-img">
          <div className={isLoaded ? 'pcard-img__bg pcard-img__bg--loaded' : 'pcard-img__bg'} style={playerImage}></div>
        </div>
      </div>
      <div className="pcard__name">
        <h1>{playerInfo.firstName} {playerInfo.lastName}</h1>
      </div>
      <div className="pcard__info">
        <div>Age: {playerInfo.age}</div>
        <div>Position: {playerInfo.primaryPosition}</div>
        <div>Jersey #: {playerInfo.jerseyNumber}</div>
        <div>Status: {playerInfo.currentRosterStatus}</div>
        <div>Height: {playerInfo.height}</div>
        <div>Weight: {playerInfo.weight}</div>
        <div>Birthdate: {playerInfo.birthDate}</div>
        <div>From: {playerInfo.birthCity}, {playerInfo.birthCountry}</div>
      </div>
    </StyledPlayerCard>
  )
}
