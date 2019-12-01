import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { PlayerCard, Table } from 'components'
import { camelCaseToWords } from 'utils'

const StyledPlayerStats = styled.div`
  .grid {
    display: grid;
    grid-gap: 1.875rem;
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

export const PlayerStats = ({values}) => {
  const _URL_ = 'v2.1/pull/nba/'
  const [playerInfo, setPlayerInfo] = useState({})
  const [playerStats, setPlayerStats] = useState({})
  const [playerReferences, setPlayerReferences] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const tableData = {
    'Stat': '50%',
    'Value': 'auto',
  }

  useEffect(() => {
    const source = axios.CancelToken.source()
    const handleFetch = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get(`${ _URL_ + values.season }/player_stats_totals.json?player=${ values.player }`,{
          cancelToken: source.token
        })
        setPlayerInfo(res.data.playerStatsTotals[0].player)
        setPlayerStats(res.data.playerStatsTotals[0].stats)
        setPlayerReferences(res.data.references.teamReferences[0])
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    handleFetch()
    return () => source.cancel("Cancelling PlayerStats request")
  }, [values])

  return (
    <StyledPlayerStats>
      <PlayerCard playerInfo={playerInfo} playerReferences={playerReferences} isLoading={isLoading} />
      <div className="grid">
        <Table tableTitle="Offense" tableData={tableData} loaderHeight="4" isLoading={isLoading}>
          {isLoading || Object.entries(playerStats.offense).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Free Throws" tableData={tableData} loaderHeight="5" isLoading={isLoading}>
          {isLoading || Object.entries(playerStats.freeThrows).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Rebounds" tableData={tableData} loaderHeight="6" isLoading={isLoading}>
          {isLoading || Object.entries(playerStats.rebounds).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Field Goals" tableData={tableData} loaderHeight="15" isLoading={isLoading}>
          {isLoading || Object.entries(playerStats.fieldGoals).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Defense" tableData={tableData} loaderHeight="8" isLoading={isLoading}>
          {isLoading || Object.entries(playerStats.defense).map(([key, value]) => (
            <tr key={key}>
              <td>{camelCaseToWords(key)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </Table>
        <Table tableTitle="Miscellaneous" tableData={tableData} loaderHeight="26" isLoading={isLoading}>
          {isLoading || Object.entries(playerStats.miscellaneous).map(([key, value]) => (
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
