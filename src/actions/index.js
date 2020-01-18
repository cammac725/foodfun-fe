import axios from 'axios'

export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS'

export const login = credentials => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .post('http://localhost:8000', credentials)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }))
}

export const register = newUser => dispatch => {
  dispatch({ type: LOADING })
  return axios
    .post('http://localhost:8000', newUser)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }))
}

export const getMeals = () => dispatch => {
  dispatch({ type:LOADING })
  axios
    .get('http://localhost:8000', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => dispatch({
      type: FETCH_MEALS_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: ERROR,
      payload: err
    }))
}