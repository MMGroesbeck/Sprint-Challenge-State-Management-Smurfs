import { GETTING_SMURFS, UPDATING_SMURFS, SET_ERROR, UPDATE_SMURFS } from "../actions/smurfActions";

const initialState = {
    smurfs: [],
    status: "idle",
    error: ""
}

export const smurfReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GETTING_SMURFS:
            return {
                ...state,
                status: "fetching"
            };
        case UPDATING_SMURFS:
            return {
                ...state,
                status: "updating"
            };
        case SET_ERROR:
            return {
                ...state,
                status: "error",
                error: action.payload
            }
        case UPDATE_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                status: "idle",
                error: ""
            }
        default:
            return state;
    }
}