import React from 'react';
import {Link} from 'react-router-dom';
import {StyledLinkForward} from './FormElements';
import QuestionContainer from './QuestionContainer';
import User from './User';

const QuestionLink = ({question, user}) => {
  return (
    <QuestionContainer>
      <p>
        <User user={user}/>
        asks if you would you rather {question.optionOne.text} or &hellip;?
      </p>
      <StyledLinkForward as={Link} to={`questions/${question.id}`}>View question</StyledLinkForward>
    </QuestionContainer>
  );
}

export default QuestionLink;
