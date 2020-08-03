import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_ERROR = "FETCHING_SMURFS_ERROR";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_ERROR = "ADD_SMURF";

export const fetchAllSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS_START });

  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("pa: getting smurf from the server api: ", res.data);
      dispatch({
        type: FETCHING_SMURFS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(
        "getting smurfs did not work for me as says Gargamel: ",
        err
      );
      dispatch({ type: FETCHING_SMURFS_ERROR, payload: err });
    });
};

export const addNewSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      alert("Could not add the new Smurf, make sure to use different info", err);
      dispatch({ type: ADD_SMURF_ERROR, payload: err });
    });
};
