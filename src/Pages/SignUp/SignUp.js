import React, { useState } from "react";
import StyledComponents from "../../Components/StyledComponents";

import { connect } from "react-redux";
import Actions from "../../Redux/Actions";
import { TextField, MenuItem, Button } from "@mui/material";
import { Redirect } from "react-router-dom";

const Name = connect(state => {
    return {
        name: state.signup.name
    }
}, dispatch => {
    return {
        setName: name => dispatch(Actions.signup.setName(name)),
    }
})(
    ({ name, setName }) => <StyledComponents.TextFieldContainer>
        <TextField
            style={{ width: "100%" }}
            required
            id="outlined-required"
            label="Name"
            value={name}
            onChange={event => setName(event.target.value)}
        />
    </StyledComponents.TextFieldContainer>
);

const Email = connect(state => {
    return {
        email: state.signup.email,
    }
}, dispatch => {
    return {
        setEmail: email => dispatch(Actions.signup.setEmail(email)),
    }
})(
    ({ email, setEmail }) => <StyledComponents.TextFieldContainer>
        <TextField
            style={{ width: "100%" }}
            required
            id="outlined-required"
            label="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
        />
    </StyledComponents.TextFieldContainer>
);

const Password = connect(state => {
    return {
        password: state.signup.password,
    }
}, dispatch => {
    return {
        setPassword: password => dispatch(Actions.signup.setPassword(password)),
    }
})(
    ({ password, setPassword }) => <StyledComponents.TextFieldContainer>
        <TextField
            style={{ width: "100%" }}
            required
            id="outlined-required"
            label="Password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
        />
    </StyledComponents.TextFieldContainer>
);

const genders = [
    {
        value: 'male',
        label: 'Male',
    }, {
        value: "female",
        label: "Female",
    },
]

const Gender = connect(state => {
    return {
        gender: state.signup.gender,
    }
}, dispatch => {
    return {
        setGender: gender => dispatch(Actions.signup.setGender(gender)),
    }
})(
    ({ gender, setGender }) => {

        return <StyledComponents.TextFieldContainer>
            <TextField
                style={{ width: "100%" }}
                id="outlined-select-currency"
                select
                label="Select"
                value={gender}
                onChange={event => setGender(event.target.value)}
                helperText="Please select your gender"
            >
                {
                    genders.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))
                }

            </TextField>
        </StyledComponents.TextFieldContainer>
    });

const DateOfBirth = connect(state => ({
    dob: state.signup.dob,
}), dispatch => ({
    setDob: dob => dispatch(Actions.signup.setDob(dob)),
}))(
    ({
        dob, setDob
    }) => <StyledComponents.TextFieldContainer>
            <StyledComponents.InputField type="date" value={dob} onChange={event => setDob(event.target.value)} />
        </StyledComponents.TextFieldContainer>
);

const ButtonSignup = ({ onClick, editing }) => <StyledComponents.TextFieldContainer>
    <Button variant="contained"
        style={{ width: "100%" }}
        onClick={onClick}
    >
        {editing === true ? "Save" : "Sign Up"}
    </Button>
</StyledComponents.TextFieldContainer>;

const Signup = () => {

    // if editing
    const localStorageEdit = localStorage.getItem("edit");
    let editStatus;
    if (!localStorageEdit)
        editStatus = false;
    else
        editStatus = true;

    const [redirect, setRedirection] = useState({
        redirect: false,
        path: "",
    });

    if (redirect.redirect)
        return <Redirect push to={redirect.path} />

    const handleClick = () => {
        setRedirection({
            redirect: true,
            path: "/listing"
        });
    }

    return (
        <StyledComponents.FullPage>

            <StyledComponents.MutualFundListingApp />

            <StyledComponents.PageHeading>
                Sign Up
            </StyledComponents.PageHeading>

            <form>
                <Name />
                <StyledComponents.MarginedDiv height="20px" />

                <Email />
                <StyledComponents.MarginedDiv height="20px" />

                <Password />
                <StyledComponents.MarginedDiv height="20px" />

                <Gender />
                <StyledComponents.MarginedDiv height="20px" />

                <DateOfBirth />
                <StyledComponents.MarginedDiv height="30px" />

                <ButtonSignup onClick={handleClick} editing={editStatus} />
            </form>

        </StyledComponents.FullPage>
    )
}

export default Signup;