import actions from "../Actions";

const actionsLoginTypes = actions.login.types;

const defaultState = {
    username: "",
    password: "",
};

const functions = {
    setUsername: (state, username) => {
        return {
            ...state,
            username,
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

        case actionsLoginTypes.setUsername: return functions
            .setUsername(state, action.username);

        case actionsLoginTypes.setPassword: return functions
            .setPassword(state, action.password);

        default: return state;
    }
}

export default login;