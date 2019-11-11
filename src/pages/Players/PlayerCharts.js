import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { api } from 'api'
import { RadarChart } from 'react-vis'
import { PlayerCard } from 'components'
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

export const PlayerCharts = ({values}) => {
  const _URL_ = 'v2.1/pull/nba/'
  const [playerInfo, setPlayerInfo] = useState({})
  const [playerStats, setPlayerStats] = useState(null)
  const [playerReferences, setPlayerReferences] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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

  const handleFetch = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await api.get(`${ _URL_ + values.season }/player_stats_totals.json?player=${ values.player }`)
      setPlayerInfo(response.data.playerStatsTotals[0].player)
      setPlayerStats(response.data.playerStatsTotals[0].stats)
      setPlayerReferences(response.data.references.teamReferences[0])
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [values])

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
      <PlayerCard playerInfo={playerInfo} playerReferences={playerReferences} isLoading={isLoading} />
    </StyledPlayerCharts>
  )
}
