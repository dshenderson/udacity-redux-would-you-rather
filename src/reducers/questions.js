import {GET_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER} from '../actions/questions';

export default function users(state = {}, action) {
  if (action.type === GET_QUESTIONS) {
    return {
      ...state,
      ...action.questions
    };
  }

  if (action.type === SAVE_QUESTION) {
    const {question} = action;

    return {
      ...state,
      [question.id]: question
    };
  }

  if (action.type === SAVE_QUESTION_ANSWER) {
    const {authedUser, qid, answer} = action;

    const questions = {
      ...state,
      [qid]: {
        ...state[qid],
        [answer]: {
          ...state[qid][answer],
          votes: [...state[qid][answer].votes, authedUser]
        }
      }
    };

    return {
      ...state,
      ...questions
    };
  }

  return state;
}
