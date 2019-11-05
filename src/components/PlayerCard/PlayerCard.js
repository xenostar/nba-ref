import React from 'react'
import styled, { keyframes } from 'styled-components'
import { TextLoader } from 'components'
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
  line-height: 3.75rem;

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
`
const Label = styled.div`
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
`
const Col = styled.div`
  border-top: 1px solid #ddd;
  align-items: stretch;
  display: flex;
  width: 100%;
`
const Val = styled.div`
  align-items: center;
  color: #444;
  display: flex;
  font-size: 16px;
  flex-grow: 1;
  line-height: 1.5;
  padding: 2px 10px;
`
const PlayerCardGridTable2 = styled(PlayerCardGridTable)`
  grid-area: table2;
`

export const PlayerCard = ({ playerInfo, playerReferences, isLoaded }) => {
  const playerImage = { backgroundImage: `url(${playerInfo.officialImageSrc})` }
  const teamImage = { backgroundImage: `url(${playerReferences.officialLogoImageSrc})` }
  const hasSocial = (playerInfo.socialMediaAccounts !== undefined && playerInfo.socialMediaAccounts.length !== 0)
  console.log("Jersey", playerInfo.jerseyNumber)
  console.log("Age", playerInfo.age)

  return (
    <StyledPlayerCard>
      <PlayerCardGridImage>
        <div className="img">
          <div className={isLoaded ? 'img__teamImage img__teamImage--loaded' : 'img__teamImage'} style={isLoaded ? teamImage : null}></div>
          <div className={isLoaded ? 'img__playerImage img__playerImage--loaded' : 'img__playerImage'} style={isLoaded ? playerImage : null}></div>
        </div>
      </PlayerCardGridImage>
      <PlayerCardGridName>
        {(playerInfo.firstName !== undefined && playerInfo.lastName !== undefined) ? (
          <>
            <h2>{`${playerInfo.firstName} ${playerInfo.lastName}`}</h2>
            {hasSocial && (
              <a href={'https://www.twitter.com/' + playerInfo.socialMediaAccounts[0].value} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            )}
          </>
        ) : (
          undefined
        ) || <TextLoader />}
      </PlayerCardGridName>
      <PlayerCardGridTable>
        <Col>
          <Label>Team</Label>
          <Val>
            {(playerReferences.city !== undefined && playerReferences.name !== undefined) ? (
              `${playerReferences.city} ${playerReferences.name}`
            ) : (
              undefined
            ) || <TextLoader />}
          </Val>
        </Col>
        <Col>
          <Label>Position</Label>
          <Val>{playerInfo.primaryPosition || <TextLoader />}</Val>
        </Col>
        <Col>
          <Label>Age</Label>
          <Val>
            {(playerInfo.age !== undefined) ? (
              (playerInfo.age === 0) ? "Unknown" : playerInfo.age
            ) : (
              undefined
            ) || <TextLoader />}
          </Val>
        </Col>
        <Col>
          <Label>Height</Label>
          <Val>{playerInfo.height || <TextLoader />}</Val>
        </Col>
        <Col>
          <Label>Weight</Label>
          <Val>{playerInfo.weight || <TextLoader />}</Val>
        </Col>
      </PlayerCardGridTable>
      <PlayerCardGridTable2>
        <Col>
          <Label>Jersey</Label>
          <Val>
            {(playerInfo.jerseyNumber !== undefined) ? (
              (playerInfo.jerseyNumber === null) ? "None" : playerInfo.jerseyNumber
            ) : (
              undefined
            ) || <TextLoader />}
          </Val>
        </Col>
        <Col>
          <Label>Status</Label>
          <Val>
            {(playerInfo.currentRosterStatus !== undefined) ? (
              (playerInfo.currentRosterStatus === "ROSTER") ? "Active" : "Inactive"
            ) : (
              undefined
            ) || <TextLoader />}
          </Val>
        </Col>
        <Col>
          <Label>Born</Label>
          <Val>{playerInfo.birthDate || <TextLoader />}</Val>
        </Col>
        <Col>
          <Label>From</Label>
          <Val>
            {(playerInfo.birthCity !== undefined && playerInfo.birthCountry !== undefined) ? (
              (playerInfo.birthCity === null || playerInfo.birthCountry === null) ? "Unknown" : `${playerInfo.birthCity} ${playerInfo.birthCountry}`
            ) : (
              undefined
            ) || <TextLoader />}
          </Val>
        </Col>
        <Col>
          <Label>College</Label>
          <Val>
            {(playerInfo.college !== undefined) ? (
              (playerInfo.college === null) ? "None" : playerInfo.college
            ) : (
              undefined
            ) || <TextLoader />}
          </Val>
        </Col>
      </PlayerCardGridTable2>
    </StyledPlayerCard>
  )
}
