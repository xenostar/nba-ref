import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Table, Form, Label, Select } from 'components'

const StyledPlayer = styled.div`
  .grid {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  @media only screen and (max-width: 1000px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
  .pc {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
    margin-bottom: 40px;
  }
  .pc .pc-col-1 {
    display: flex;
    grid-column: 1 / 2;
  }
  .pc .pc-col-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 2 / 4;
  }
  @media only screen and (max-width: 1000px) {
    .pc {
      grid-template-columns: 1fr;
    }
    .pc .pc-col-1,
    .pc .pc-col-2 {
      grid-column: 1;
    }
  }
  .pc-img-wrapper {
    background-color: rgba(0,0,0,0.1);
    border-radius: 3px;
    position: relative;
    padding-top: 60%;
    overflow: hidden;
    width: 100%;
  }
  .pc-img-holder {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .pc-img-holder.loaded img {
    opacity: 1;
  }
  .pc-img-holder img {
    opacity: 0;
    margin: 0 auto;
    transition: 0.4s opacity ease;
    width: 80%;
  }
`

export const Player = props => {
  const __API__ = 'https://api.mysportsfeeds.com/v2.1/pull/nba/'
  const routePlayerName = props.match.params.playername
  const [season, setSeason] = useState('2018-2019')
  const [playerInfo, setPlayerInfo] = useState({})
  const [playerStats, setPlayerStats] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const seasons = [
    '2018-2019',
    '2017-2018',
    '2016-2017',
    '2015-2016'
  ]
  const tableData = [
    [ 'Stat', '50%' ],
    [ 'Value', 'auto' ]
  ]

  const camelCaseToWords = str => {
    return str.match(/^[a-z]+|[A-Z][a-z]*/g).map(function(x){
        return x[0].toUpperCase() + x.substr(1).toLowerCase();
    }).join(' ');
  }

  const handleChange = ({ target: { value } }) => setSeason(value)

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`${ __API__ + season }-regular/player_stats_totals.json?player=${ routePlayerName }`, {
      headers: {
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_APIKEY + ':' + process.env.REACT_APP_NBA_APIPASS),
        'Cache-Control' : 'no-cache, no-store, must-revalidate',
        'Accept-Encoding' : 'gzip'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setPlayerInfo(data.playerStatsTotals[0].player)
      setPlayerStats(data.playerStatsTotals[0].stats)
      setIsLoaded(true)
    })
    .catch(error => {
      console.log(error)
    })
  }, [season, routePlayerName])

  useEffect(() => { // componentDidMount
    console.log("Mounting Player...")
    handleFetch()
    return () => console.log('Unmounting Player...')
  }, [handleFetch])

  return (
    <StyledPlayer className="page">
      <Form>
        <div>
          <Label>Season</Label>
          <Select name="season" value={season} onChange={handleChange}>
            {seasons.map(val => (
              <option value={val}>{val}</option>
            ))}
          </Select>
        </div>
      </Form>
      <div className="pc">
        <div className="pc-col-1">
          <div className="pc-img-wrapper">
            <div  className={isLoaded ? 'pc-img-holder loaded' : 'pc-img-holder'}>
              <img src={playerInfo.officialImageSrc} alt="Player Headshot" />
            </div>
          </div>
        </div>
        <div className="pc-col-2">
          <h1>{playerInfo.firstName} {playerInfo.lastName}</h1>
          <div>Age: {playerInfo.age}</div>
          <div>Position: {playerInfo.primaryPosition}</div>
          <div>Jersey #: {playerInfo.jerseyNumber}</div>
          <div>Status: {playerInfo.currentRosterStatus}</div>
          <div>Height: {playerInfo.height}</div>
          <div>Weight: {playerInfo.weight}</div>
          <div>Birthdate: {playerInfo.birthDate}</div>
          <div>From: {playerInfo.birthCity}, {playerInfo.birthCountry}</div>
        </div>
      </div>
      <div className="grid">
      <Table tableTitle="Offense" tableData={tableData} isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.offense).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Free Throws" tableData={tableData} isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.freeThrows).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Rebounds" tableData={tableData} isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.rebounds).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Field Goals" tableData={tableData} isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.fieldGoals).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Defense" tableData={tableData} isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.defense).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Miscellaneous" tableData={tableData} isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.miscellaneous).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
      </div>
    </StyledPlayer>
  )
}
