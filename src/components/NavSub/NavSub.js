import styled from 'styled-components'

export const NavSub = styled.nav`
  background-color: rgba(237, 84, 41, 1);
  border-radius: 0 0 3px 3px;
  display: flex;
  margin-bottom: 2.5rem;
  overflow: hidden;

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
`
