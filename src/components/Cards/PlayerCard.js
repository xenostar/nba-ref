import React from 'react'
import styled from 'styled-components'
import { Image, TextLoader } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const StyledPlayerCard = styled.div`
  display: grid;
  margin-bottom: 1.875rem;
  grid-column-gap: 1.875rem;
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

  div {
    background-color: rgba(0,0,0,0.05);
    border: 1px solid #ddd;
    border-radius: 3px;
    padding-top: 61%;
    position: relative;
    overflow: hidden;
    width: 100%;
  }
`
const PlayerImage = styled(Image)`
  height: 100%;
  object-fit: contain;
  object-position: bottom;
  position: absolute;
  top: 0;
  width: 100%;
`
const TeamImage = styled(Image)`
  left: 10px;
  position: absolute;
  top: 10px;
  width: 25%;
`

const PlayerCardGridName = styled.div`
  grid-area: name;
  display: flex;
  align-items: center;
  line-height: 3.75rem;

  a {
    font-size: 30px;
    margin-left: 10px;
  }
`

const PlayerCardGridTable = styled.div`
  border: 1px solid #ddd;
  border-radius: 3px;
  /* border-top: 0; */
  display: flex;
  grid-area: table1;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
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
  :first-child {
    border-top: 0;
  }
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

export const PlayerCard = ({ playerInfo, playerReferences, isLoading }) => (
  <StyledPlayerCard>
    <PlayerCardGridImage>
      <div>
        <TeamImage src={playerReferences.officialLogoImageSrc} alt={`${playerReferences.city} ${playerReferences.name}`} opacity="0.5" />
        <PlayerImage src={playerInfo.officialImageSrc} alt={`${playerInfo.firstName} ${playerInfo.lastName}`} />
      </div>
    </PlayerCardGridImage>
    <PlayerCardGridName>
      {isLoading ? <TextLoader /> : (
        <>
          <h2>{`${playerInfo.firstName ?? "First"} ${playerInfo.lastName ?? "Last"}`}</h2>
          {(playerInfo.socialMediaAccounts !== undefined && playerInfo.socialMediaAccounts.length !== 0) && (
            <a href={'https://www.twitter.com/' + playerInfo.socialMediaAccounts[0].value} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          )}
        </>
      )}
    </PlayerCardGridName>
    <PlayerCardGridTable>
      <Col>
        <Label>Team</Label>
        <Val>
          {isLoading ? <TextLoader /> : `${playerReferences.city ?? "City"} ${playerReferences.name ?? "Team"}`}
        </Val>
      </Col>
      <Col>
        <Label>Position</Label>
        <Val>
          {isLoading ? <TextLoader /> : playerInfo.primaryPosition ?? "Unknown"}
        </Val>
      </Col>
      <Col>
        <Label>Age</Label>
        <Val>
          {isLoading ? <TextLoader /> : playerInfo.age ?? "Unknown"}
        </Val>
      </Col>
      <Col>
        <Label>Height</Label>
        <Val>
          {isLoading ? <TextLoader /> : playerInfo.height ?? "Unknown"}
        </Val>
      </Col>
      <Col>
        <Label>Weight</Label>
        <Val>
          {isLoading ? <TextLoader /> : playerInfo.weight ?? "Unknown"}
        </Val>
      </Col>
    </PlayerCardGridTable>
    <PlayerCardGridTable2>
      <Col>
        <Label>Jersey</Label>
        <Val>
          {isLoading ? <TextLoader /> : playerInfo.jerseyNumber ?? "None"}
        </Val>
      </Col>
      <Col>
        <Label>Status</Label>
        <Val>
          {isLoading ? <TextLoader /> : (
            (() => {
              switch(playerInfo.currentRosterStatus) {
                case 'ROSTER':
                  return 'Active';
                case 'ASSIGNED_TO_MINORS':
                  return 'G-League';
                case 'UFA':
                  return 'Unrestricted Free Agent';
                case 'RETIRED':
                  return 'Retired';
                default:
                  return 'Unknown';
              }
            })())}
        </Val>
      </Col>
      <Col>
        <Label>Born</Label>
        <Val>
          {isLoading ? <TextLoader /> : playerInfo.birthDate ?? "Unknown"}
        </Val>
      </Col>
      <Col>
        <Label>From</Label>
        <Val>
          {isLoading ? <TextLoader /> : `${playerInfo.birthCity ?? "Birth City"} ${playerInfo.birthCountry ?? "Country"}`}
        </Val>
      </Col>
      <Col>
        <Label>College</Label>
        <Val>
          {isLoading ? <TextLoader /> : playerInfo.college ?? "None"}
        </Val>
      </Col>
    </PlayerCardGridTable2>
  </StyledPlayerCard>
)
