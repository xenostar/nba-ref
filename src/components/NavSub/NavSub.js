import styled from 'styled-components'

export const NavSub = styled.nav`
  background-color: rgba(237, 84, 41, 1);
  border-radius: 3px;
  display: flex;
  float: left;
  margin-bottom: 2.5rem;
  margin-right: 1.25rem;
  overflow: hidden;
  @media only screen and (max-width: 62.5rem) {
    border-radius: 0;
    box-shadow: 0 3px 10px rgba(0,0,0,0.5);
    margin: 0;
    position: fixed;
    right: 0;
    bottom: 3.4375rem;
    left: 0;
    z-index: 900;
  }

  a {
    color: #fff;
    display: block;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.4s;
    padding: 0 1.25rem;
    user-select: none;
  }
  a:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  a.active {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }
  a:active,
  a:focus,
  a:-moz-focus-inner,
  a:-moz-focus-outer,
  a:-moz-focusring {
    border: 0;
    outline: 0;
  }
  @media only screen and (max-width: 62.5rem) {
    a {
      flex-basis: 0;
      flex-grow: 1;
      padding: 0;
    }
  }
`
