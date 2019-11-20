import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: rgba(0,0,0,0.05);
  border: 1px solid #ddd;
  border-radius: 3px;
  color: #aaa;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  line-height: 38px;
  padding: 0 10px;
  text-transform: uppercase;
  user-select: none;
`

export const Button = props => (
  <StyledButton type={props.type} value={props.value} onClick={props.onClick}>
    {props.children}
  </StyledButton>
)
