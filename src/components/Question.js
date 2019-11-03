import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionContainer from './QuestionContainer';
import QuestionAnswered from './QuestionAnswered';
import QuestionUnanswered from './QuestionUnanswered';
import User from './User';

class Question extends Component {
  render() {
    const {
      author,
      isAnswered,
      question: {optionOne, optionTwo},
      match: {
        params: {
          id
        }
      }
    } = this.props;

    return (
      <QuestionContainer>
        {(isAnswered.opt1 || isAnswered.opt2)
          ? <QuestionAnswered opt1={optionOne} opt2={optionTwo} answered={isAnswered.op1 ? 'opt1' : 'opt2'}/>
          : <QuestionUnanswered id={id}/>
        }
        <p>Asked by <User user={author}/></p>
      </QuestionContainer>
    );
  }
}

function mapStateToProps({authedUser, questions, users}, props) {
  const question = questions[props.match.params.id];

  return {
    author: users[question.author],
    question,
    isAnswered: {
      opt1: question.optionOne.votes.includes(authedUser),
      opt2: question.optionTwo.votes.includes(authedUser)
    }
  };
}

export default connect(mapStateToProps)(Question);
