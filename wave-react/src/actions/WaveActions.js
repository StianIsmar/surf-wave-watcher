import {
  FETCH_WAVEA_DATA_BEGIN,
  FETCH_WAVEA_DATA_FAILURE,
  FETCH_WAVE_DATA_SUCCESS,
} from './WaveActionTypes'
import fetch from 'cross-fetch'
import store from '../store/index'

// Async action creator for fetching movies.
export function fetchWaveData() {
  let fetchURL = "http://magicseaweed.com/api/151b5ebfa8e5c565c9b3667a40de4725/forecast/?spot_id=673"
  return dispatch => {
    // Use middleware to dispatch several functions and wait for the HTTP response.
    dispatch(fetchWaveDataBegin())
    return fetch(fetchURL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchWaveDataSuccess(json))
        return json
      })
      .catch(error => dispatch(fetchWaveDataFailure(error)))
  }
}

export function fetchWaveDataBegin() {
  return { type: FETCH_WAVEA_DATA_BEGIN }
}
// Send it through to the reducer!
export function fetchWaveDataSuccess(waveData) {
  return {
    type: FETCH_WAVE_DATA_SUCCESS,
    payload: { waveData }
  }
}
export function fetchWaveDataFailure(error) {
  return {
    type: FETCH_WAVEA_DATA_FAILURE,
    payload: { error }
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
