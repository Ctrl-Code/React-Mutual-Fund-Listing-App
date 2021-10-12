import actions from "../Actions";

const actionsLoginTypes = actions.login.types;

const defaultState = {
    email: "",
    password: "",
};

const functions = {
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
    }
}

function login(state = defaultState, action) {
    switch (action.type) {

        case actionsLoginTypes.setEmail: return functions
            .setEmail(state, action.email);

        case actionsLoginTypes.setPassword: return functions
            .setPassword(state, action.password);

        default: return state;
    }
}

export default login;