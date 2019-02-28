import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
  FETCH_NEXT_PAGE_FAILURE, FETCH_NEXT_PAGE_SUCCESS,
  LOG_SEARCH,
  UPDATE_PAGE,
  UPDATE_TITLE,
  UPDATE_FILTER_QUERY,
  EMPTY_FILTER_ITEMS,
  UPDATE_SORT_TOGGLE, POST_COMMENT_BEGIN, POST_COMMENT_FAILURE,
  FETCH_SORTED_MOVIES_SUCCESS, POST_COMMENT_SUCCESS
} from './MovieActionTypes'
import fetch from 'cross-fetch'
import { BASE_URL } from '../api/constants'
import store from '../store/index'

export function updateTitle (title) {
  return { type: UPDATE_TITLE, title }
}

export function updatePage () {
  return { type: UPDATE_PAGE }
}

export function logSearch (title) {
  return {
    type: LOG_SEARCH,
    title: title
  }
}

export function fetchMoviesBegin () {
  return { type: FETCH_MOVIES_BEGIN }
}

export function fetchMoviesSuccess (movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: { movies }
  }
}

export function fetchMoviesFailure (error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: { error }
  }
}

export function fetchNextPageFailure (error) {
  // To show error message upon fetch failure.
  return {
    type: FETCH_NEXT_PAGE_FAILURE,
    payload: 'No more movies to show!'
  }
}

export function fetchNextPageSuccess (movies) {
  return {
    type: FETCH_NEXT_PAGE_SUCCESS,
    payload: { movies }
  }
}

export function fetchNextPage (title, filtercolor) {
  let fetchURL = ''
  // We need the next page to load.
  let page = store.getState().MovieReducer.nextPage
  if (title === undefined || title === '') {
    if (filtercolor === 'grey') {
      fetchURL = BASE_URL + `/movies?page=${page}`
    } else {
      // We need to do a sorted call of a page!
      if (filtercolor === 'green') {
        console.log('GREEN!!!!')

        // fetch URL for DESC
        fetchURL = BASE_URL + `/movies?page=${page}&sortOnRating=ASC`
      }
      if (filtercolor === 'red') {
        // fetch URL for ASC
        fetchURL = BASE_URL + `/movies?page=${page}&sortOnRating=DESC`
      }
    }
  } else {
    // We have a given title
    if (filtercolor === 'grey') {
      fetchURL = BASE_URL + '/movies?page=' + page + '&search=' + title
    } else {
      if (filtercolor === 'green') {
        // fetch URL for DESC
      }
      if (filtercolor === 'red') {
        // fetch URL for ASC
      }
    }
  }
  return (dispatch, getState) => {
    dispatch(fetchMoviesBegin())
    return fetch(fetchURL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchNextPageSuccess(json))
        return json
      })
      .catch(error => dispatch(fetchNextPageFailure(error)))
  }
}

// Async action creator for fetching movies.
export function fetchMovies (title) {
  let fetchURL = ''
  let page = 1
  if (title === undefined || title === '') {
    fetchURL = BASE_URL + '/movies?page=' + page + '&title='
  } else {
    fetchURL = BASE_URL + '/movies?page=' + page + '&search=' + title
  }
  return dispatch => {
    // Use middleware to dispatch several functions and wait for the HTTP response.
    dispatch(fetchMoviesBegin())
    return fetch(fetchURL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMoviesSuccess(json))
        return json
      })
      .catch(error => dispatch(fetchMoviesFailure(error)))
  }
}

export function postCommentBegin () {
  return {
    type: POST_COMMENT_BEGIN
  }
}

export function postCommentFailure (error) {
  return {
    type: POST_COMMENT_FAILURE,
    payload: error
  }
}

export function postCommentSuccess (key, comment) {
  return {
    type: POST_COMMENT_SUCCESS,
    movie_id: key,
    comment: comment
  }
}

export function postComment (key, comment) {
  let fetchURL = BASE_URL + '/movies/reviews'
  let putObject = { 'id': key, 'review': comment }
  return dispatch => {
    dispatch(postCommentBegin())
    return fetch(fetchURL, {
      method: 'PUT',
      body: JSON.stringify(putObject),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(dispatch(postCommentSuccess(key, comment)))
      .catch(error => dispatch(postCommentFailure(error)))
  }
}

// Handle HTTP errors since fetch won't.
function handleErrors (response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
// Action creator for updating the filterQuery in the redux store:
export function updateFilterQuery (filterquery) {
  return {
    type: UPDATE_FILTER_QUERY,
    payload: filterquery
  }
}

/**
 *  Action creator for empyting the filterQuery:
 * To be called when a new fetch-movie API call is done.
 */
export function emptyFilterItems () {
  return {
    type: EMPTY_FILTER_ITEMS
  }
}

// Async action creator for fetching sorted movies.
export function fetchSortedMovies (togglesort, title) {
  let prevButtonColor = togglesort
  let fetchURL = ''
  let page = 1
  if (title === undefined || title === '') {
    if (prevButtonColor === 'grey') {
      // ASC when title is not given
      fetchURL = BASE_URL + `/movies?page=${page}&sortOnRating=ASC`
    }
    if (prevButtonColor === 'green') {
      // DESC when title is not given
      fetchURL = BASE_URL + `/movies?page=${page}&sortOnRating=DESC`
    }
    if (prevButtonColor === 'red') {
      // Not sorted when title is not given
      fetchURL = BASE_URL + `/movies?page=${page}`
    }
  } else {
    if (prevButtonColor === 'grey') {
      // ASC when title is defined
      fetchURL = BASE_URL + `/movies?page=${page}&sortOnRating=ASC&search=${title}`
    }
    if (prevButtonColor === 'green') {
      // DESC when title is defined
      fetchURL = BASE_URL + `/movies?page=${page}&sortOnRating=DESC&search=${title}`
    }
    if (prevButtonColor === 'red') {
      // No sort when title is defined
      fetchURL = BASE_URL + `/movies?page=${page}&search=${title}`
    }
  }
  return dispatch => {
    dispatch(fetchMoviesBegin())
    return fetch(fetchURL)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSortedMoviesSuccess(json))
        if (prevButtonColor === 'green') {
          return json.reverse()
        }
        if (prevButtonColor === 'red') {
          return json
        } else { return json }
      })
      .catch(error => dispatch(fetchMoviesFailure(error)))
  }
}

export function fetchSortedMoviesSuccess (movies) {
  return {
    type: FETCH_SORTED_MOVIES_SUCCESS,
    payload: { movies }
  }
}
