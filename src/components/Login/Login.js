import React from 'react'
import { LoginContainer, LoginInnerContainer } from './Login.styles'
import { Button } from '@mui/material'
import { auth, provider } from "../../firebase"

const Login = () => {
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img 
                    src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp"
                    alt="slack-logo"
                />
                <h1>Welcome to the community!</h1>
                <p>Slack Neo</p>

                <Button type="submit" onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login