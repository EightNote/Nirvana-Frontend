import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface AuthenticationPromptProps {
    buttons: AuthenticationPromptLinkProps[]
  }
  
  export interface AuthenticationPromptLinkProps {
    text: string,
    link: string,
    variant: "text" | "outlined" | "contained" | undefined
  }

  const AuthenticationPromptLink = (props: AuthenticationPromptLinkProps) => {
    let text = props.text
    let link = props.link
    let variant = props.variant
    return (
      <Button variant={variant}>
        <Link to={link}> {text} </Link>
      </Button>
    )
  }
  
 const AuthenticationPrompt = (props: AuthenticationPromptProps) => {
    let buttons = props.buttons
    return (
        <Stack  display="flex" justifyContent={"center"} alignItems={"stretch"} color="red" direction="column" spacing = {5}>
          {buttons.map((button, idx) =>
            <AuthenticationPromptLink variant={idx % 2 ? "contained" : 'outlined'} text = {button.text} link = {button.link}/>
          )}
        </Stack>
      )
  }

  export default AuthenticationPrompt