import actions from "../Actions";

const actionsDetailsTypes = actions.details.types;

const defaultState = {
    data: null,
};

const functions = {
    setApiData: (state, data) => {
        return {
            ...state,
            data,
        }
    },
}

function details(state = defaultState, action) {
    switch (action.type) {

        case actionsDetailsTypes.setApiData: return functions
            .setApiData(state, action.data);

        default: return state;
    }
}

export default details;