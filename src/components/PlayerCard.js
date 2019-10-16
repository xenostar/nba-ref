import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`
const fadeIn2 = keyframes`
  0% { opacity: 0; }
  100% { opacity: 0.5; }
`

const StyledPlayerCard = styled.div`
  display: grid;
  margin-bottom: 2.5rem;
  grid-column-gap: 2.5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "frame name name"
    "frame table1 table2"
    "frame table1 table2"
    "frame table1 table2"
  ;
  @media only screen and (max-width: 50rem) { /* 800px */
    grid-row-gap: 1.25rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "name"
      "frame"
      "table1"
      "table2"
    ;
  }
`

const PlayerCardGridImage = styled.div`
  display: flex;
  grid-area: frame;

  .img {
    background-color: rgba(0,0,0,0.05);
    border: 1px solid #ddd;
    border-radius: 3px;
    padding-top: 60%;
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .img__playerImage {
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  .img__playerImage--loaded {
    animation: ${fadeIn} 0.4s;
    animation-fill-mode: both;
  }
  .img__teamImage {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    background-size: 25%;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  .img__teamImage--loaded {
    animation: ${fadeIn2} 0.4s;
    animation-delay: 0.4s;
    animation-fill-mode: both;
  }
`

const PlayerCardGridName = styled.div`
  grid-area: name;
  display: flex;
  align-items: center;

  h1 {
    margin-bottom: 0;
  }
  a {
    font-size: 30px;
    margin-left: 10px;
  }
`

const PlayerCardGridTable = styled.div`
  border: 1px solid #ddd;
  border-radius: 3px;
  border-top: 0;
  display: flex;
  grid-area: table1;
  flex-wrap: wrap;
  justify-content: center;

  .col {
    border-top: 1px solid #ddd;
    align-items: stretch;
    display: flex;
    width: 100%;
  }
  .label {
    align-items: center;
    background: rgba(0,0,0,0.05);
    border-right: 1px solid #ddd;
    color: #aaa;
    display: flex;
    font-size: 14px;
    font-weight: 700;
    justify-content: flex-end;
    padding: 10px 10px 10px 2px;
    min-width: 35%;
    text-transform: uppercase;
  }
  .val {
    align-items: center;
    color: #444;
    display: flex;
    font-size: 16px;
    flex-grow: 1;
    padding: 10px;
  }
`
const PlayerCardGridTable2 = styled(PlayerCardGridTable)`
  grid-area: table2;
`

export const PlayerCard = ({ playerInfo, playerReferences, isLoaded }) => {
  const playerImage = {
    backgroundImage: `url(${playerInfo.officialImageSrc})`
  }
  const teamImage = {
    backgroundImage: `url(${playerReferences.officialLogoImageSrc})`
  }
  const hasSocial = (playerInfo.socialMediaAccounts !== undefined && playerInfo.socialMediaAccounts.length !== 0)
  return (
    <StyledPlayerCard>
      <PlayerCardGridImage>
        <div className="img">
          <div className={isLoaded ? 'img__teamImage img__teamImage--loaded' : 'img__teamImage'} style={teamImage}></div>
          <div className={isLoaded ? 'img__playerImage img__playerImage--loaded' : 'img__playerImage'} style={playerImage}></div>
        </div>
      </PlayerCardGridImage>
      <PlayerCardGridName>
        <h1>{playerInfo.firstName} {playerInfo.lastName}</h1>
        {hasSocial && (
          <a href={'https://www.twitter.com/' + playerInfo.socialMediaAccounts[0].value} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        )}
      </PlayerCardGridName>
      <PlayerCardGridTable>
        <div className="col">
          <div className="label">Team</div>
          <div className="val">{playerReferences.city + ' ' + playerReferences.name}</div>
        </div>
        <div className="col">
          <div className="label">Position</div>
          <div className="val">{playerInfo.primaryPosition}</div>
        </div>
        <div className="col">
          <div className="label">Age</div>
          <div className="val">{playerInfo.age}</div>
        </div>
        <div className="col">
          <div className="label">Height</div>
          <div className="val">{playerInfo.height}</div>
        </div>
        <div className="col">
          <div className="label">Weight</div>
          <div className="val">{playerInfo.weight}</div>
        </div>
      </PlayerCardGridTable>
      <PlayerCardGridTable2>
        <div className="col">
          <div className="label">Jersey</div>
          <div className="val">{playerInfo.jerseyNumber}</div>
        </div>
        <div className="col">
          <div className="label">Status</div>
          <div className="val">{playerInfo.currentRosterStatus === "ROSTER" ? "Active" : "Inactive" }</div>
        </div>
        <div className="col">
          <div className="label">Born</div>
          <div className="val">{playerInfo.birthDate}</div>
        </div>
        <div className="col">
          <div className="label">From</div>
          <div className="val">{playerInfo.birthCity}, {playerInfo.birthCountry}</div>
        </div>
        <div className="col">
          <div className="label">College</div>
          <div className="val">{playerInfo.college || "None"}</div>
        </div>
      </PlayerCardGridTable2>
    </StyledPlayerCard>
  )
}
