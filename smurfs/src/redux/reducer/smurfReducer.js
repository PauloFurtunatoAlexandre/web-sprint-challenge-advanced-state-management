import {
  FETCHING_SMURFS_START,
  FETCHING_SMURFS_SUCCESS,
  FETCHING_SMURFS_ERROR,
  ADD_SMURF_ERROR,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
} from "../actions/actions";

const initial_state = {
  smurfs: [],
  isFetching: false,
  error: "",
};

export const smurfReducer = (state = initial_state, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCHING_SMURFS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ADD_SMURF_START:
      return {
        ...state,
        error: "",
        isFetching: true,
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        ifFetching: false,
      };
    case ADD_SMURF_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
