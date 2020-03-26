import * as actionTypes from "./actions";
import { authios } from "../utils/axiosWithAuth";
import * as vendor from "../utils/_vendor";

export const fetchPlaying = () => dispatch => {
  authios()
    .get(`${vendor.movieurl}${vendor.nowPlaying}?${vendor.language}`)
    .then(res => {
      console.log(res);
      dispatch({
        type: actionTypes.GET_NOW_PLAYING,
        payload: res
      })
    })
    .catch(err =>
      console.log(`Couldn't retrieve currently playing movies`, err)
    );
};

// export const actionName = (payload) => ({
//   type: GET_MOST_POPULAR,
//   payload
// })
// export const actionName = (payload) => ({
//   type: GET_COMINGSOON,
//   payload
// })
