import React from 'react'
import styled from 'styled-components'

import ATL_logo from './img/ATL_logo.svg'
import BKN_logo from './img/BKN_logo.svg'
import BOS_logo from './img/BOS_logo.svg'
import CHA_logo from './img/CHA_logo.svg'
import CHI_logo from './img/CHI_logo.svg'
import CLE_logo from './img/CLE_logo.svg'
import DAL_logo from './img/DAL_logo.svg'
import DEN_logo from './img/DEN_logo.svg'
import DET_logo from './img/DET_logo.svg'
import GSW_logo from './img/GSW_logo.svg'
import HOU_logo from './img/HOU_logo.svg'
import IND_logo from './img/IND_logo.svg'
import LAC_logo from './img/LAC_logo.svg'
import LAL_logo from './img/LAL_logo.svg'
import MEM_logo from './img/MEM_logo.svg'
import MIA_logo from './img/MIA_logo.svg'
import MIL_logo from './img/MIL_logo.svg'
import MIN_logo from './img/MIN_logo.svg'
import NOP_logo from './img/NOP_logo.svg'
import NYK_logo from './img/NYK_logo.svg'
import OKC_logo from './img/OKC_logo.svg'
import ORL_logo from './img/ORL_logo.svg'
import PHI_logo from './img/PHI_logo.svg'
import PHX_logo from './img/PHX_logo.svg'
import POR_logo from './img/POR_logo.svg'
import SAC_logo from './img/SAC_logo.svg'
import SAS_logo from './img/SAS_logo.svg'
import TOR_logo from './img/TOR_logo.svg'
import UTA_logo from './img/UTA_logo.svg'
import WAS_logo from './img/WAS_logo.svg'

const StyledHome = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr 2fr;
  @media only screen and (max-width: 62.5rem) {
    grid-template-columns: 1fr;
  }

  .team-grid {
    display: grid;
    grid-gap: 1.25rem;
    grid-template-columns: repeat(5, 1fr);
  }
  .team-grid div {
    border-radius: 5px;
  }

  h1 {
    color: #ED5429;
    font-size: 4.25em;
    line-height: 0.975;
  }
`

export const Home = () => {
  const teams = [
    {
      city: 'Atlanta',
      name: 'Hawks',
      color: [
        "#e03a3e",
        "#c1d32f",
        "#26282a",
      ],
      logo: ATL_logo,
    },
    {
      city: 'Boston',
      name: 'Celtics',
      color: [
        "#007a33",
        "#ba9653",
        "#963821",
        "#e59e6d",
        "#000000",
      ],
      logo: BOS_logo,
    },
    {
      city: 'Brooklyn',
      name: 'Nets',
      color: [
        "#ffffff",
        "#000000",
      ],
      logo: BKN_logo,
    },
    {
      city: 'Charlotte',
      name: 'Hornets',
      color: [
        "#1d1160",
        "#00788c",
        "#a1a1a4",
      ],
      logo: CHA_logo,
    },
    {
      city: 'Chicago',
      name: 'Bulls',
      color: [
        "#ce1141",
        "#000000",
      ],
      logo: CHI_logo,
    },
    {
      city: 'Cleveland',
      name: 'Cavaliers',
      color: [
        "#6f263d",
        "#041e42",
        "#ffb81c",
        "#000000"
      ],
      logo: CLE_logo,
    },
    {
      city: 'Dallas',
      name: 'Mavericks',
      color: [
        "#00538c",
        "#002b5e",
        "#b8c4ca",
        "#000000",
      ],
      logo: DAL_logo,
    },
    {
      city: 'Denver',
      name: 'Nuggets',
      color: [
        "#0e2240",
        "#fec524",
        "#8b2131",
        "#1d428a",
      ],
      logo: DEN_logo,
    },
    {
      city: 'Detroit',
      name: 'Pistons',
      color: [
        "#c8102e",
        "#006bb6",
        "#bec0c2",
        "#002d62"
      ],
      logo: DET_logo,
    },
    {
      city: 'Detroit',
      name: 'Pistons',
      color: [
        "#c8102e",
        "#006bb6",
        "#bec0c2",
        "#002d62"
      ],
      logo: DET_logo,
    },
  ]

  // const __API__ = 'https://api.mysportsfeeds.com/v2.1/pull/nba/'
  // const [teams, setTeams] = useState([])
  // const [isLoaded, setIsLoaded] = useState(false)

  // const handleFetch = useCallback(() => {
  //   setIsLoaded(false)

  //   fetch(`${ __API__ }2018-2019-regular/team_stats_totals.json?stats=none`, {
  //     headers: {
  //       'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_NBA_APIKEY + ':' + process.env.REACT_APP_NBA_APIPASS),
  //       'Accept-Encoding' : 'gzip'
  //     },
  //   })
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(data => {
  //     console.log(data.teamStatsTotals)
  //     setTeams(data.teamStatsTotals)
  //     setIsLoaded(true)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }, [])

  // useEffect(() => { // componentDidMount
  //   console.log("Mounting Home...")
  //   handleFetch()
  //   return () => console.log('Unmounting Home...')
  // }, [handleFetch])

  return (
    <StyledHome className="page content">
      <div className="hero">
        <h1>Welcome</h1>
        <h2>To quite possibly the greatest reference for NBA statistics in the universe.</h2>
      </div>
      <div>
        <div className="team-grid">
          {teams.map(data => {
            const teamColor = {
              backgroundColor: data.color[0],
            }
            return (
              <div style={teamColor}><img src={data.logo} alt={data.city + ' ' + data.name} /></div>
            )
          })}
        </div>
        {/* <div>
          {isLoaded && teams.map(({ team }, index) => {
            const teamImage = {
              backgroundImage: `url(${team.officialLogoImageSrc})`,
              backgroundSize: `contain`,
              height: '100px'
            }
            return (
              <p key={index} style={teamImage}>{team.abbreviation}</p>
            )
          })}
        </div> */}
      </div>
    </StyledHome>
  )
}
