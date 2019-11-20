import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  background: rgba(0,0,0,0.05);
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #aaa;
  font-size: 12px;
  font-weight: 700;
  line-height: 38px;
  padding: 0 10px;
  user-select: none;
  @media only screen and (max-width: 1000px) {
    min-width: 20%;
  }
`

export const Input = props => (
  <StyledInput
    type={props.type}
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
)
