import axios from "axios";

export const GETTING_SMURFS = "GETTING_SMURFS";
export const UPDATING_SMURFS = "UPDATING_SMURFS";
export const SET_ERROR = "SET_ERROR";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const getSmurfs = () => dispatch => {
    dispatch ({ type: GETTING_SMURFS });
    axios.get("http://localhost:3333/smurfs")
            .then(resp => {
                dispatch({ type: UPDATE_SMURFS, payload: resp.data });
            })
            .catch(er => {
                dispatch({ type: SET_ERROR, payload: er });
            })
}
export const addSmurf = smurf => dispatch => {
    dispatch({ type: SET_ERROR, payload: ""});
    dispatch({ type: UPDATING_SMURFS });
    axios.post("http://localhost:3333/", smurf)
        .then(res => {
            getSmurfs();
        })
        .catch(err => {
            dispatch({ type: SET_ERROR, payload: err});
        })
}