import React, { useState} from 'react'
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
  .team-grid img {
    margin: 0 auto;
  }

  .img_wrapper {
    position: relative;
    padding-top: 75%;
    overflow: hidden;
  }
  .img_wrapper.loaded img{
    opacity: 1;
  }
  .img_wrapper img{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    object-fit: contain;
    /* width: 100%; */
    opacity: 0;
    transition: opacity 1s;
  }

  h1 {
    color: #ED5429;
    font-size: 4.25em;
    line-height: 0.975;
  }
`

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState([])
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
        "#002d62",
      ],
      logo: DET_logo,
    },
    {
      city: 'Golden State',
      name: 'Warriors',
      color: [
        "#fdb927",
        "#006bb6",
        "#26282a",
      ],
      logo: GSW_logo,
    },
    {
      city: 'Houston',
      name: 'Rockets',
      color: [
        "#ce1141",
        "#000000",
        "#c4ced4",
      ],
      logo: HOU_logo,
    },
    {
      city: 'Indiana',
      name: 'Pacers',
      color: [
        "#002d62",
        "#fdbb30",
        "#bec0c2",
      ],
      logo: IND_logo,
    },
    {
      city: 'Los Angeles',
      name: 'Clippers',
      color: [
        "#bec0c2",
        "#000000",
        "#c8102e",
        "#1d428a",
      ],
      logo: LAC_logo,
    },
    {
      city: 'Los Angeles',
      name: 'Lakers',
      color: [
        "#552583",
        "#fdb927",
        "#000000",
      ],
      logo: LAL_logo,
    },
    {
      city: 'Memphis',
      name: 'Grizzlies',
      color: [
        "#5d76a9",
        "#12173f",
        "#f5b112",
        "#707271",
      ],
      logo: MEM_logo,
    },
    {
      city: 'Miami',
      name: 'Heat',
      color: [
        "#98002e",
        "#f9a01b",
        "#000000"
      ],
      logo: MIA_logo,
    },
    {
      city: 'Milwaukee',
      name: 'Bucks',
      color: [
        "#00471b",
        "#eee1c6",
        "#0077c0",
        "#000000",
      ],
      logo: MIL_logo,
    },
    {
      city: 'Minnesota',
      name: 'Timberwolves',
      color: [
        "#0c2340",
        "#236192",
        "#9ea2a2",
        "#78be20",
      ],
      logo: MIN_logo,
    },
    {
      city: 'New Orleans',
      name: 'Pelicans',
      color: [
        "#0c2340",
        "#c8102e",
        "#857a4d"
      ],
      logo: NOP_logo,
    },
    {
      city: 'New York',
      name: 'Knicks',
      color: [
        "#006bb6",
        "#f58426",
        "#bec0c2",
        "#000000"
      ],
      logo: NYK_logo,
    },
    {
      city: 'Oklahoma City',
      name: 'Thunder',
      color: [
        "#007ac1",
        "#ef3b24",
        "#002d62",
        "#fdbb30",
      ],
      logo: OKC_logo,
    },
    {
      city: 'Orlando',
      name: 'Magic',
      color: [
        "#c4ced4",
        "#0077c0",
        "#000000",
      ],
      logo: ORL_logo,
    },
    {
      city: 'Philadelphia',
      name: '76ers',
      color: [
        "#ed174c",
        "#006bb6",
        "#002b5c",
        "#c4ced4",
      ],
      logo: PHI_logo,
    },
    {
      city: 'Phoenix',
      name: 'Suns',
      color: [
        "#1d1160",
        "#e56020",
        "#000000",
        "#63727a",
        "#f9ad1b",
        "#b95915",
        "#bec0c2",
      ],
      logo: PHX_logo,
    },
    {
      city: 'Portland',
      name: 'Trail Blazers',
      color: [
        "#e03a3e",
        "#000000",
      ],
      logo: POR_logo,
    },
    {
      city: 'Sacramento',
      name: 'Kings',
      color: [
        "#5a2d81",
        "#63727a",
        "#000000",
      ],
      logo: SAC_logo,
    },
    {
      city: 'San Antonio',
      name: 'Spurs',
      color: [
        "#c4ced4",
        "#000000"
      ],
      logo: SAS_logo,
    },
    {
      city: 'Toronto',
      name: 'Raptors',
      color: [
        "#ce1141",
        "#000000",
        "#a1a1a4",
        "#b4975a",
      ],
      logo: TOR_logo,
    },
    {
      city: 'Utah',
      name: 'Jazz',
      color: [
        "#f9a01b",
        "#002b5c",
        "#00471b",
      ],
      logo: UTA_logo,
    },
    {
      city: 'Washington',
      name: 'Wizards',
      color: [
        "#002b5c",
        "#e31837",
        "#c4ced4",
      ],
      logo: WAS_logo,
    },
  ]

  const imgLoaded = (teamName) => {
    setIsLoaded(prevState => {
      return { ...prevState, [teamName]: true }
    })
  }

  console.log(isLoaded)


  return (
    <StyledHome className="page content">
      <div className="hero">
        <h1>Welcome</h1>
        <h2>To quite possibly the greatest reference for NBA statistics in the universe.</h2>
      </div>
      <div>
        <div className="team-grid">
          {teams.map((data, index) => {
            const teamColor = {
              backgroundColor: data.color[0],
            }
            return (
              <div key={index} className={isLoaded[data.name] ? 'img_wrapper loaded' : 'img_wrapper'} style={teamColor}>
                <img src={data.logo} alt={data.city + ' ' + data.name} onLoad={() => imgLoaded(data.name)} />
              </div>
            )
          })}
        </div>
      </div>
    </StyledHome>
  )
}
