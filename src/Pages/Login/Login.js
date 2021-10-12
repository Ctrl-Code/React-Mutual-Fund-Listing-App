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

    const { email, password,
        setEmail, setPassword,
        setSignupEmail, setSignupPassword } = props;

    const handleUserInput = (field, value) => {
        switch (field) {
            case "email": setEmail(value); break;
            case "password": setPassword(value); break;
            default: break;
        }
    }

    const handleButton = (path) => {
        setSignupEmail(email);
        setSignupPassword(password);
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
                            label="Email"
                            value={email}
                            onChange={event => handleUserInput("email", event.target.value)}
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
        email: state.login.email,
        password: state.login.password,
    }
}, dispatch => {
    return {
        setEmail: (email) => dispatch(Actions.login.setEmail(email)),
        setPassword: (password) => dispatch(Actions.login.setPassword(password)),
        setSignupEmail: (email) => dispatch(Actions.signup.setEmail(email)),
        setSignupPassword: (password) => dispatch(Actions.signup.setPassword(password)),
    }
})(Login);

export default ReduxLogin;