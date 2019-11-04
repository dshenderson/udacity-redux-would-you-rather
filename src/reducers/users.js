import {GET_USERS} from '../actions/users';
import {SAVE_USER_ANSWER, SAVE_USER_QUESTION} from '../actions/users';

export default function users(state = {}, action) {
  if (action.type === GET_USERS) {
    return {
      ...state,
      ...action.users
    };
  }

  if (action.type === SAVE_USER_ANSWER) {
    const {authedUser, qid, answer} = action;

    const users = {
      ...state,
      [authedUser]: {
        ...state[authedUser],
        answers: {
          ...state[authedUser].answers,
          [qid]: answer
        }
      }
    };

    return {
      ...state,
      ...users
    };
  }

  if (action.type === SAVE_USER_QUESTION) {
    const {authedUser, id} = action;

    return {
      ...state,
      [authedUser]: {
        ...state[authedUser],
        questions: [
          ...state[authedUser].questions,
          id
        ]
      }
    };
  }

  return state;
}
