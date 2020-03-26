import * as actionTypes from '../Actions/actions'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case actionTypes.GET_NOW_PLAYING:
    return {
       ...state,
       payload
      }

  default:
    return state
  }
}
