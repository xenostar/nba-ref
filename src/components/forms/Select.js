import styled from 'styled-components'

export const Select = styled.select`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0 3px 3px 0;
  color: #444;
  cursor: pointer;
  font-size: 1.125em;
  font-weight: 500;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 10px;
  user-select: none;
  -webkit-appearance: none;

  :-moz-focusring {
    outline: 0;
  }
  @media only screen and (max-width: 1000px) {
    width: auto;
    flex-grow: 1;
  }
`
