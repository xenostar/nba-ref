import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: #ED5429;
  border: 1px solid #ED5429;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  line-height: 38px;
  padding: 0 10px;
  text-transform: uppercase;
  user-select: none;
  width: 100%;
`

export const Button = props => (
  <StyledButton
    className={props.className}
    type={props.type}
    value={props.value}
    onClick={props.onClick}>
    {props.children}
  </StyledButton>
)
