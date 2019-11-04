import {_getQuestions} from '../utils/_DATA';
import {showLoading, hideLoading} from 'react-redux-loading';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}

export function saveQuestionAnswer({authedUser, qid, answer}) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleGetQuestions () {
  return dispatch => {
    dispatch(showLoading());

    return _getQuestions()
      .then(questions => dispatch(getQuestions(questions)))
      .then(() => dispatch(hideLoading()));;
  };
}
