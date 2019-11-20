import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Input } from 'components'

const StyledPasswordModal = styled.div`
  background: rgba(255,255,255,0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const PasswordModal = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"))
  const [password, setPassword] = useState('')

  const handleClick = () => {
    console.log("Hello world!");
  }

  const handleChange = event => {
    setPassword(event.target.value)
    console.log("Input Value:", password);
  }

  useEffect(() => {
    // const loggedIn =
    console.log(loggedIn)
  }, [])

  return (
    <>
      {loggedIn ||
        <StyledPasswordModal>
          <Input onChange={handleChange} value={password} type="text" />
          <Button onClick={handleClick}>Log In</Button>
        </StyledPasswordModal>
      }
    </>
  )
}
