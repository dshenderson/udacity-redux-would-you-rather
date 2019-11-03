import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from '../utils/_DATA';
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

function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}

function saveQuestionAnswer({authedUser, qid, answer}) {
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

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const {authedUser: author} = getState();

    dispatch(showLoading());

    return _saveQuestion({author, optionOneText, optionTwoText})
      .then(question => dispatch(saveQuestion(question)))
      .catch(e => {
        console.warn('Error in saveQuestion: ', e);
        alert('There was an error saving the question. Please try again.');
      })
      .finally(() => dispatch(hideLoading()));
  }
}

export function handleSaveQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const {authedUser} = getState();

    dispatch(showLoading());

    return _saveQuestionAnswer({authedUser, qid, answer})
      .then(() => dispatch(saveQuestionAnswer({authedUser, qid, answer})))
      .catch(e => {
        console.warn('Error in handleSaveQuestionAnswer: ', e);
        alert('There was an error answering the question. Please try again.');
      })
      .finally(() => dispatch(hideLoading()));
  }
}
