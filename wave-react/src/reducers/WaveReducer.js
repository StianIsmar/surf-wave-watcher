import {
  FETCH_WAVEA_DATA_BEGIN,
  FETCH_WAVEA_DATA_FAILURE,
  FETCH_WAVE_DATA_SUCCESS,
} from '../actions/WaveActionTypes'

// The toggleSort button is set to grey, as it is not "activated" yet
const initialState = {
  items: [],
  error: null,
  loading: false
}

// Reducer handling all the actions concerning the movies
export const WaveReducer = (state = initialState, action) => {
  console.log(action.type, action.payload)

  switch (action.type) {

    case FETCH_WAVEA_DATA_BEGIN:
      /**
       * Mark state as loading so frontend knows to display loading wheel.
       * Reset any errors when starting new fetch.
       */
      return Object.assign({}, state, {
        loading: true
      })

    case FETCH_WAVE_DATA_SUCCESS:
      return Object.assign({}, state, {
        items: action.payload.waveData,
      })
    case FETCH_WAVEA_DATA_FAILURE:
      return Object.assign({}, state, {
        error: true,
      })
    default:
      return state
  }
}