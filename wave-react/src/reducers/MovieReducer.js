import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS,
  LOG_SEARCH,
  UPDATE_TITLE,
  UPDATE_PAGE,
  FETCH_NEXT_PAGE_FAILURE,
  FETCH_NEXT_PAGE_SUCCESS,
  UPDATE_FILTER_QUERY,
  EMPTY_FILTER_ITEMS,
  POST_COMMENT_BEGIN,
  POST_COMMENT_FAILURE,
  FETCH_SORTED_MOVIES_SUCCESS,
  UPDATE_SORT_TOGGLE, POST_COMMENT_SUCCESS
} from '../actions/MovieActionTypes'

// The toggleSort button is set to grey, as it is not "activated" yet
const initialState = {
  title: '',
  searchHistory: [],
  items: [],
  loading: false,
  error: null,
  filterQuery: '',
  filterItems: [],
  toggleSort: 'grey',
  nextPage: 0
}

// Reducer handling all the actions concerning the movies
export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return Object.assign({}, state, {
        title: action.title
      })
    case UPDATE_PAGE:
      return Object.assign({}, state, {
        nextPage: state.nextPage + 1
      })
    case LOG_SEARCH:
      // Update search history by appending to the list.
      return Object.assign({}, state, {
        searchHistory: [...state.searchHistory, { searchedTitle: action.title }]
      })
    case FETCH_MOVIES_BEGIN:
      /**
       * Mark state as loading so frontend knows to display loading wheel.
       * Reset any errors when starting new fetch.
       */
      return Object.assign({}, state, {
        loading: true,
        error: null
      })
    case FETCH_MOVIES_SUCCESS:
      /**
       * When finished, set loading to false.
       * We update the items with what was received.
       */
      return Object.assign({}, state, {
        loading: false,
        items: action.payload.movies,
        nextPage: 1,
        filterItems: action.payload.movies,
        toggleSort: 'grey',
        filterQuery: ''
      })
    case POST_COMMENT_BEGIN:
      // Reset the error
      return Object.assign({}, state, {
        error: null
      })
    case POST_COMMENT_FAILURE:
      return Object.assign({}, state, {
        error: action.payload.message
      })
    case POST_COMMENT_SUCCESS:
      // Updates the comment in state to display the newly posted comment.
      return Object.assign({}, state, {
        filterItems: state.filterItems.map(
          (filterItem) => filterItem.movie_id === action.movie_id ?
            { ...filterItem, comment: action.comment } :
            filterItem
        )}
      )
    case FETCH_SORTED_MOVIES_SUCCESS:
      /**
       *  If the sorting button is red when it is pressed films are now being loaded in the normal
       *  and the button is set to grey
       */
      if (state.toggleSort === 'red') {
        return Object.assign({}, state, {
          loading: false,
          items: action.payload.movies,
          nextPage: 1,
          filterItems: action.payload.movies,
          toggleSort: 'grey'
        })
      }
      /**
       * If the sorting button is green when it is pressed films are now being loaded in the
       * ascending order and the button is set to red
       */
      if (state.toggleSort === 'green') {
        return Object.assign({}, state, {
          loading: false,
          items: action.payload.movies,
          nextPage: 1,
          filterItems: action.payload.movies,
          toggleSort: 'red'
        })
      }
      /**
       *  If the sorting button is grey when it is pressed films are now being loaded in the
       *  ascending order and the button is set to green
       */
      if (state.toggleSort === 'grey') {
        return Object.assign({}, state, {
          loading: false,
          items: action.payload.movies,
          nextPage: 1,
          filterItems: action.payload.movies,
          toggleSort: 'green'
        })
      } break
    case FETCH_MOVIES_FAILURE:
      /**
       * Set loading to false and save error so we can display it.
       * Also, we reset items list upon error encounter.
       */
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.error.message,
        items: [],
        nextPage: 1
      })
    case FETCH_NEXT_PAGE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
        nextPage: state.nextPage - 1
      })
    case FETCH_NEXT_PAGE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        items: state.items.concat(action.payload.movies),
        filterItems: state.filterItems.concat(action.payload.movies)
      })
    // Updating the filtered items by the entered filter string
    case UPDATE_FILTER_QUERY:
      var myJson = JSON.stringify([...state.items])
      var filteredJson = findInObject(JSON.parse(myJson), { summary: action.payload })
      // If no items are loaded
      if ([...state.items].length === 0 || filteredJson === undefined) {
        return Object.assign({}, state, {
          filterQuery: action.payload,
          filterItems: []
        })
      } else {
        return Object.assign({}, state, {
          filterQuery: action.payload,
          filterItems: filteredJson
        })
      }
    // Emptying the filterQuery when a new search is done
    case EMPTY_FILTER_ITEMS:
      return Object.assign({}, state, {
        filterQuery: ''
      })
    case UPDATE_SORT_TOGGLE:
      if (state.toggleSort === 'green' && state.filterItems.length > 0) {
        // reverse sorting!
        let reverseSortedItems = [...state.filterItems].reverse()
        return Object.assign({}, state, {
          toggleSort: 'red',
          filterItems: reverseSortedItems
        })
        // Turn off sorting completely:
      }
      if (state.toggleSort === 'red' && state.filterItems.length > 0) {
        let newState = [...state.filterItems]
        let randomOrder = newState.sort(function (a, b) { return Math.random() - 0.5 })
        return Object.assign({}, state, {
          toggleSort: 'grey',
          filterItems: randomOrder
        })
      }
  } if (state.toggleSort === 'grey' && state.filterItems.length > 0) {
    // Sorting the filteredList:
    let data = [...state.filterItems]
    data.sort(function (a, b) {
      return a.rating.localeCompare(b.rating)
    })
    let sorted = data.sort().reverse()
    // Sorter filteredItems, sett den til svart og returner det!!
    return Object.assign({}, state, {
      toggleSort: 'green',
      filterItems: sorted
    })
  } else {
    return Object.assign({}, state, {
      toggleSort: 'grey'
    })
  }
}

// Helper method used for seeing if a search criteria is in a movie synopsis:
function findInObject(myObject, myCriteria) {
  return myObject.filter(function (obj) {
    return Object.keys(myCriteria).every(function (c) {
      return obj[c].includes(myCriteria[c])
    })
  })
}
