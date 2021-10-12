import React, { useState } from "react";
import StyledComponents from "../../Components/StyledComponents";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { connect } from "react-redux";
import Actions from "../../Redux/Actions";
import { Redirect } from "react-router-dom";

const StyledButtonContainer = StyledComponents.styled.div`
    display: flex;
    flex-direction: column;
`;

const Login = (props) => {

    const [redirect, setRedirection] = useState({
        redirect: false,
        path: "",
    });

    const { username, password, setUsername, setPassword } = props;

    const handleUserInput = (field, value) => {
        switch (field) {
            case "username": setUsername(value); break;
            case "password": setPassword(value); break;
            default: break;
        }
    }

    const handleButton = (path) => {
        setRedirection({
            redirect: true,
            path,
        })
    }

    if (redirect.redirect)
        return <Redirect push to={redirect.path} />

    else
        return (
            <StyledComponents.FullPage>

                <StyledComponents.MutualFundListingApp />

                <StyledComponents.PageHeading>
                    Login
                </StyledComponents.PageHeading>

                <form>

                    <StyledComponents.TextFieldContainer>
                        <TextField
                            style={{ width: "100%" }}
                            required
                            id="outlined-required"
                            label="Username"
                            value={username}
                            onChange={event => handleUserInput("username", event.target.value)}
                        />
                    </StyledComponents.TextFieldContainer>

                    <StyledComponents.MarginedDiv height="20px" />

                    <StyledComponents.TextFieldContainer>
                        <TextField
                            style={{ width: "100%" }}
                            required
                            id="outlined-required"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={event => handleUserInput("password", event.target.value)}
                        />
                    </StyledComponents.TextFieldContainer>

                    <StyledComponents.MarginedDiv height="30px" />

                    <StyledButtonContainer>

                        <Button variant="contained"
                            style={{ marginBottom: "20px" }}
                            onClick={() => handleButton("/listing")}
                        >
                            Submit
                        </Button>

                        <Button variant="contained"
                            style={{ marginBottom: "20px" }}
                            onClick={() => handleButton("/signup")}
                        >
                            Sign Up
                        </Button>

                    </StyledButtonContainer>
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