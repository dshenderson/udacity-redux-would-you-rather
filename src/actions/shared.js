import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA';
import {showLoading, hideLoading} from 'react-redux-loading';
import {saveQuestion, saveQuestionAnswer} from '../actions/questions';
import {saveUserQuestion, saveUserAnswer} from '../actions/users';

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const {authedUser: author} = getState();

    dispatch(showLoading());

    return _saveQuestion({author, optionOneText, optionTwoText})
      .then(question => {
        dispatch(saveQuestion(question));
        dispatch(saveUserQuestion({authedUser: author, id: question.id}));
      })
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
      .then(() => {
        dispatch(saveQuestionAnswer({authedUser, qid, answer}))
        dispatch(saveUserAnswer({authedUser, qid, answer}))
      })
      .catch(e => {
        console.warn('Error in handleSaveQuestionAnswer: ', e);
        alert('There was an error answering the question. Please try again.');
      })
      .finally(() => dispatch(hideLoading()));
  }
}
