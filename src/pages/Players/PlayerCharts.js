import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { PlayerCard } from 'components'
import { RadarChart } from 'react-vis'
import 'react-vis/dist/style.css'

const StyledPlayerCharts = styled.div`
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

export const PlayerCharts = props => {
  const _API_ = 'https://api.mysportsfeeds.com/v2.1/pull/nba/'
  const [playerInfo, setPlayerInfo] = useState({})
  const [playerStats, setPlayerStats] = useState(null)
  const [playerReferences, setPlayerReferences] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  const powerGridDomains = [
    {name: '2PT %', domain: [0, 100], getValue: d => d.fg2PtPct},
    {name: '3PT %', domain: [0, 100], getValue: d => d.fg3PtPct},
    {name: 'FG %', domain: [0, 100], getValue: d => d.fgPct},
    {name: 'FT %', domain: [0, 100], getValue: d => d.ftPct}
  ]

  const powerGridData = !playerStats ? [] : [
    {
      fg2PtPct: playerStats.fieldGoals.fg2PtPct,
      fg3PtPct: playerStats.fieldGoals.fg3PtPct,
      fgPct: playerStats.fieldGoals.fgPct,
      ftPct: playerStats.freeThrows.ftPct
    }
  ]

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
    <StyledPlayerCharts>
      <div className="powerGrid">
        <RadarChart
          data={powerGridData}
          domains={powerGridDomains}
          width={400}
          height={400}
          margin={{ left: 75, right: 75, top: 75, bottom: 75 }}
          style={{
            labels: {
              fill: "#444",
              fontSize: 12,
              fontWeight: 700
            },
            polygons: {
              strokeWidth: 2,
              strokeOpacity: 1,
              stroke: "#ED5429",
              strokeLinejoin: "round",
              fillOpacity: 0.1,
              fill: "#ED5429"
            }
          }}
        />
      </div>
      <PlayerCard playerInfo={playerInfo} playerReferences={playerReferences} isLoaded={isLoaded} />
    </StyledPlayerCharts>
  )
}
