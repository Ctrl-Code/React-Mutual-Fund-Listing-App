import React, { useState } from "react";
import StyledComponents from "../../Components/StyledComponents";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { connect } from "react-redux";
import Actions from "../../Redux/Actions";
import { Redirect } from "react-router-dom";

const Login = (props) => {

    const [redirect, setRedirection] = useState({
        redirect: false,
        path: "",
    });

    if (redirect.redirect)
        return <Redirect push to={redirect.path} />

    const { username, password, setUsername, setPassword } = props;

    const handleUserInput = (field, value) => {
        switch (field) {
            case "username": setUsername(value); break;
            case "password": setPassword(value); break;
            default: break;
        }
    }

    const handleSubmit = () => {
        setRedirection({
            redirect: true,
            path: "/listing",
        })
    }

    const handleSignup = () => {
        setRedirection({
            redirect: true,
            path: "/signup",
        });
    }

    return (
        <StyledComponents.FullPage>

            <StyledComponents.MutualFundListingApp />

            <StyledComponents.PageHeading>
                Login
            </StyledComponents.PageHeading>

            <form>

                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    value={username}
                    onChange={event => handleUserInput("username", event.target.value)}
                />

                <div />

                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={event => handleUserInput("password", event.target.value)}
                />

                <div />

                <Button variant="contained"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>

                <Button variant="contained"
                    onClick={handleSignup}
                >
                    Sign Up
                </Button>
            </form>
        </StyledComponents.FullPage >
    );
}

const ReduxLogin = connect(state => {
    return {
        username: state.login.username,
        password: state.login.password,
    }
}, dispatch => {
    return {
        setUsername: (username) => dispatch(Actions.login.setUsername(username)),
        setPassword: (password) => dispatch(Actions.login.setPassword(password)),
    }
})(Login);

export default ReduxLogin;