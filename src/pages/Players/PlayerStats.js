import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { PlayerCard, Table } from 'components'

const StyledPlayerStats = styled.div`
  .grid {
    display: grid;
    grid-gap: 2.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  @media only screen and (max-width: 87.5rem) { /* 1400px */
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 62.5rem) { /* 1000px */
    .grid {
      grid-template-columns: 1fr;
    }
  }
`

export const PlayerStats = props => {
  const _API_ = 'https://api.mysportsfeeds.com/v2.1/pull/nba/'
  const [playerInfo, setPlayerInfo] = useState({})
  const [playerStats, setPlayerStats] = useState({})
  const [playerReferences, setPlayerReferences] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const tableData = {
    'Stat': '50%',
    'Value': 'auto',
  }

  const camelCaseToWords = str => {
    return str.match(/^[a-z]+|[A-Z][a-z]*/g).map(function(x) {
        return x[0].toUpperCase() + x.substr(1).toLowerCase();
    }).join(' ');
  }

  const handleFetch = useCallback(() => {
    setIsLoaded(false)

    fetch(`${ _API_ + props.values.season }/player_stats_totals.json?player=${ props.values.player }`, {
      headers: {
        'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_APIKEY + ':' + process.env.REACT_APP_NBA_APIPASS),
        'Accept-Encoding' : 'gzip'
      },
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setPlayerInfo(data.playerStatsTotals[0].player)
      setPlayerStats(data.playerStatsTotals[0].stats)
      setPlayerReferences(data.references.teamReferences[0])
      setIsLoaded(true)
    })
    .catch(error => {
      console.log(error)
    })
  }, [props.values])

  useEffect(() => {
    handleFetch()
  }, [handleFetch])

  return (
    <StyledPlayerStats>
      <PlayerCard playerInfo={playerInfo} playerReferences={playerReferences} isLoaded={isLoaded} />
      <div className="grid">
        <Table tableTitle="Offense" tableData={tableData} loaderHeight="4" isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.offense).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Free Throws" tableData={tableData} loaderHeight="5" isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.freeThrows).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Rebounds" tableData={tableData} loaderHeight="6" isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.rebounds).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Field Goals" tableData={tableData} loaderHeight="15" isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.fieldGoals).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Defense" tableData={tableData} loaderHeight="8" isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.defense).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Miscellaneous" tableData={tableData} loaderHeight="26" isLoaded={isLoaded}>
          {isLoaded && Object.entries(playerStats.miscellaneous).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
      </div>
    </StyledPlayerStats>
  )
}
