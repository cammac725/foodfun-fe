import {
  LOADING,
  ERROR,
  LOGIN_SUCCESS,
}

const initialState = {
  error: '',
  meals: [],
  loading: false,
  isLoggedIn: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOADING:
      return {
        ...state,
        error: '',
        loading: true,
      }

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        error: '',
        loading: false,
        isLoggedIn: true
      }

    default:
      return state
  }
}