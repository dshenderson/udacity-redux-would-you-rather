import {_getUsers} from '../utils/_DATA';
import {showLoading, hideLoading} from 'react-redux-loading';

export const GET_USERS = 'GET_USERS';
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';

function getUsers(users) {
  return {
    type: GET_USERS,
    users
  }
}

export function handleGetUsers() {
  return dispatch => {
    dispatch(showLoading());

    return _getUsers()
      .then(users => dispatch(getUsers(users)))
      .then(() => dispatch(hideLoading()));;
  };
}

export function saveUserAnswer({authedUser, qid, answer}) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function saveUserQuestion({authedUser, id}) {
  return {
    type: SAVE_USER_QUESTION,
    authedUser,
    id
  };
}
