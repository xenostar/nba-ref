import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: rgba(0,0,0,0.05);
  border-radius: 3px;
  display: flex;
  margin-bottom: 1.875rem;
  overflow: hidden;
  @media (max-width: 62.5rem) {
    background-color: rgba(255,255,255,1);
    border-radius: 0;
    box-shadow: 0 3px 10px rgba(0,0,0,0.5);
    margin-bottom: 0;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }

  a {
    border-bottom: 5px solid transparent;
    color: #aaa;
    display: block;
    font-weight: 700;
    height: 3.4375rem;
    line-height: 3.4375rem;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.4s;
    padding: 0 1.25rem;
    user-select: none;
  }
  a:hover {
    color: #777;
  }
  a.active {
    border-bottom: 5px solid #ED5429;
    color: #ED5429;
  }
  a:active,
  a:focus,
  a:-moz-focus-inner,
  a:-moz-focus-outer,
  a:-moz-focusring {
    border: 0;
    outline: 0;
  }
  svg {
    display: none;
  }
  @media (max-width: 62.5rem) { /* 1000px */
    a {
      align-items: center;
      border-bottom: 0;
      display: flex;
      flex-direction: column;
      font-size: 0.8em;
      font-weight: 400;
      justify-content: center;
      line-height: normal;
      padding: 0;
      text-transform: none;
      width: 20%;
    }
    a.active {
      background-color: #ED5429;
      color: #fff;
      border-bottom: 0;
    }
    svg {
      display: inline-block;
      margin-bottom: 4px;
    }
  }
`
