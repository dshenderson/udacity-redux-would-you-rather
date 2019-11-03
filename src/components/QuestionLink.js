import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {Button} from './FormElements';
import QuestionContainer from './QuestionContainer';
import User from './User';

const StyledLink = styled(Button)`
  &:after {
    content: '⇨';
    margin-left: 1rem;
  }
`;

const QuestionLink = ({question, user}) => {
  return (
    <QuestionContainer>
      <p>
        <User user={user}/>
        asks if you would you rather {question.optionOne.text} or &hellip;?
      </p>
      <StyledLink as={Link} to={`questions/${question.id}`}>View question</StyledLink>
    </QuestionContainer>
  );
}

export default QuestionLink;
