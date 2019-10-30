import React from 'react'
import styled from 'styled-components'
import { Label } from 'components'

const StyledSelect = styled.select`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0 3px 3px 0;
  color: #444;
  cursor: pointer;
  font-size: 1em;
  height: 2.5rem;
  padding: 0 10px;
  user-select: none;
  -webkit-appearance: none;
  @media only screen and (max-width: 1000px) {
    width: auto;
    flex-grow: 1;
  }

  :hover {
    background-color: rgba(0,0,0,0.025);
  }

  :active,
  :focus,
  :-moz-focus-outer,
  :-moz-focus-inner,
  :-moz-focusring {
    border: 0;
    outline: 0;
    color: rgba(0,0,0,0);
    opacity: 0;
  }
`

export const Select = props => (
  <div>
    <Label>{props.label}</Label>
    <StyledSelect name={props.name} value={props.value} onChange={props.onChange}>
      {props.children}
    </StyledSelect>
  </div>
)
