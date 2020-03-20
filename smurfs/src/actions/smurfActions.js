import axios from "axios";

export const GETTING_SMURFS = "GETTING_SMURFS";
export const UPDATING_SMURFS = "UPDATING_SMURFS";
export const SET_ERROR = "SET_ERROR";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const getSmurfs = () => dispatch => {
  dispatch({ type: GETTING_SMURFS });
  console.log("Getting.");
  axios
    .get("http://localhost:3333/smurfs")
    .then(resp => {
      dispatch({ type: UPDATE_SMURFS, payload: resp.data });
    })
    .catch(er => {
      console.error("Update error: ", er);
      dispatch({ type: SET_ERROR, payload: "Error adding smurf" });
    });
};
export const addSmurf = smurf => dispatch => {
  dispatch({ type: SET_ERROR, payload: "" });
  dispatch({ type: UPDATING_SMURFS });
  console.log("Adding:", smurf);
  axios
    .post("http://localhost:3333/smurfs", {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
      id: smurf.id
    })
    .then(res => {
      dispatch({ type: GETTING_SMURFS });
      dispatch({ type: UPDATE_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.error("Post error: ", err);
      dispatch({ type: SET_ERROR, payload: "Error updating smurfs." });
    });
};
export const deleteSmurf = smurf => dispatch => {
  console.log("Deleting: ", smurf);
  axios
    .delete(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(r => {
        dispatch({ type: UPDATE_SMURFS, payload: r.data });
    })
    .catch(e => {
      console.error("Delete error: ", e);
      dispatch({ type: SET_ERROR, payload: "Error deleting smurf." });
    });
};
export const editSmurf = smurf => dispatch => {
  console.log("Editing: ", smurf);
  let uSmurf = { id: smurf.id };
  smurf.name && (uSmurf = { ...uSmurf, name: smurf.name });
  smurf.age && (uSmurf = { ...uSmurf, age: smurf.age });
  smurf.height && (uSmurf = { ...uSmurf, height: smurf.height });
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, uSmurf)
    .then(res => {
      dispatch({ type: UPDATE_SMURFS, payload: res.data });
    })
    .catch(err => {
      console.error("Edit error: ", err);
      dispatch({ type: SET_ERROR, payload: "Error editing smurf." });
    });
};
