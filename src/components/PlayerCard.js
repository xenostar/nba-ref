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
    "frame info1 info2"
    "frame info1 info2"
    "frame info1 info2"
  ;
  @media only screen and (max-width: 50rem) { /* 800px */
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-row-gap: 1.25rem;
    grid-template-areas:
      "name"
      "frame"
      "info1"
      "info2"
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
  .pcard__info1,
  .pcard__info2 {
    border: 1px solid #ddd;
    border-top: 0;
    overflow: hidden;
    border-radius: 3px;
    grid-area: info1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .pcard__info2 {
    grid-area: info2;
  }

  .pcard-col {
    border-top: 1px solid #ddd;
    align-items: stretch;
    display: flex;
    width: 100%;
  }
  .pcard-label {
    align-items: center;
    background: rgba(0,0,0,0.05);
    border-right: 0;
    color: #aaa;
    display: flex;
    font-size: 14px;
    font-weight: 700;
    justify-content: right;
    padding: 10px;
    min-width: 35%;
    text-transform: uppercase;
  }
  .pcard-val {
    align-items: center;
    color: #444;
    display: flex;
    font-size: 16px;
    flex-grow: 1;
    padding: 10px;
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

  .pcard-table {
    display: flex;
    flex-direction: column;
  }
  .pcard-table div {
    background-color: #eee;
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
      <div className="pcard__info1">
        <div className="pcard-col">
          <div className="pcard-label">Age</div>
          <div className="pcard-val">{playerInfo.age}</div>
        </div>
        <div className="pcard-col">
          <div className="pcard-label">Posn</div>
          <div className="pcard-val">{playerInfo.primaryPosition}</div>
        </div>
        <div className="pcard-col">
          <div className="pcard-label">Height</div>
          <div className="pcard-val">{playerInfo.height}</div>
        </div>
        <div className="pcard-col">
          <div className="pcard-label">Weight</div>
          <div className="pcard-val">{playerInfo.weight}</div>
        </div>
      </div>
      <div className="pcard__info2">
        <div className="pcard-col">
          <div className="pcard-label">Jersey</div>
          <div className="pcard-val">{playerInfo.jerseyNumber}</div>
        </div>
        <div className="pcard-col">
          <div className="pcard-label">Status</div>
          <div className="pcard-val">{playerInfo.currentRosterStatus === "ROSTER" ? "Active" : "Inactive" }</div>
        </div>
        <div className="pcard-col">
          <div className="pcard-label">Born</div>
          <div className="pcard-val">{playerInfo.birthDate}</div>
        </div>
        <div className="pcard-col">
          <div className="pcard-label">From</div>
          <div className="pcard-val">{playerInfo.birthCity}, {playerInfo.birthCountry}</div>
        </div>
      </div>
    </StyledPlayerCard>
  )
}
