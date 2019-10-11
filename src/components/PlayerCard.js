import React from 'react'
import styled from 'styled-components'

const StyledPlayerCard = styled.div`
  display: grid;
  margin-bottom: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 2.5rem;
  grid-template-areas:
    "card name name"
    "card info info"
    "card info info"
    "card info info"
  ;

  .player-card__col-1 {
    display: flex;
    grid-area: card;
  }
  .player-card__col-2 {
    grid-area: name;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .player-card__col-3 {
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 1.25rem;
    grid-template-areas:
      "name"
      "card"
      "info"
    ;
  }

  .player-card__img-wrapper {
    background-color: rgba(0,0,0,0.05);
    border: 1px solid #ddd;
    border-radius: 3px;
    position: relative;
    padding-top: 60%;
    overflow: hidden;
    width: 100%;
  }
  .player-card__img-holder {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .player-card__img-holder img {
    opacity: 0;
    margin: 0 auto;
    transition: 0.4s all ease;
    transform: scale(0.8) translateY(16%);
    width: 82.4%;
  }
  .player-card__img-holder.loaded img {
    opacity: 1;
    transform: scale(1) translateY(0%);
  }
`

export const PlayerCard = ({ playerInfo, isLoaded }) => (
  <StyledPlayerCard>
    <div className="player-card__col-1">
      <div className="player-card__img-wrapper">
        <div  className={isLoaded ? 'player-card__img-holder loaded' : 'player-card__img-holder'}>
          <img src={playerInfo.officialImageSrc} alt="Player Headshot" />
        </div>
      </div>
    </div>
    <div className="player-card__col-2">
      <h1>{playerInfo.firstName} {playerInfo.lastName}</h1>
    </div>
    <div className="player-card__col-3">
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
