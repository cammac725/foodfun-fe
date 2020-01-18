import axios from 'axios'

export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login = credentials => dispatch => {
  dispatch({ type: LOADING });
  return axios
    .post('', credentials)
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
