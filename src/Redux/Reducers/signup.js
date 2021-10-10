import actions from "../Actions";

const actionsSignupTypes = actions.signup.types;

const defaultState = {
    name: "",
    email: "",
    password: "",
    gender: "",
    dob: "",
};

const functions = {
    setName: (state, name) => {
        return {
            ...state,
            name,
        }
    },

    setEmail: (state, email) => {
        return {
            ...state,
            email,
        }
    },

    setPassword: (state, password) => {
        return {
            ...state,
            password,
        }
    },

    setGender: (state, gender) => {
        return {
            ...state,
            gender,
        }
    },

    setDob: (state, dob) => {
        return {
            ...state,
            dob,
        }
    },

}

function signup(state = defaultState, action) {
    switch (action.type) {

        case actionsSignupTypes.setName: return functions
            .setName(state, action.name);

        case actionsSignupTypes.setEmail: return functions
            .setEmail(state, action.email);

        case actionsSignupTypes.setPassword: return functions
            .setPassword(state, action.password);

        case actionsSignupTypes.setGender: return functions
            .setGender(state, action.gender);

        case actionsSignupTypes.setDob: return functions
            .setDob(state, action.dob);

        default: return state;
    }
}

export default signup;