import React from 'react';
import styled from '@emotion/styled';

const VotesContainer = styled.ul`
  padding: 0;
  list-style: none;
`;

const Option = styled.li`
  width: 32rem;
  max-width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: ${props => props.chosen ? '4px solid gold' : '1px solid silver'};
  border-radius: 0.25rem;
  background: linear-gradient(to right, lightskyblue ${props => props.fill}%, white ${props => props.fill}%)};
  &:after {
    content: '${props => props.chosen ? '✓' : ''}';
    font-size: 1.125rem;
    font-weight: bold;
    margin-left: 1rem;
  }
`;

const Legend = styled.p`
  &:before {
    content: '✓';
    font-size: 1.125rem;
    font-weight: bold;
    margin-right: 0.25rem;
  }
`;

const Stats = styled.span`
  &:before {
    content: '(';
    margin-left: 0.25rem;
  }
  &:after {
    content: ')';
  }
`;

export default function QuestionAnswered(props) {
  const {opt1, opt2, answered} = props;
  const votes1 = opt1.votes.length;
  const votes2 = opt2.votes.length;
  const votesTotes = votes1 + votes2;
  const perc1 = Math.round(votes1 / votesTotes * 10000) / 100;
  const perc2 = Math.round(votes2 / votesTotes * 10000) / 100;

  return (
    <VotesContainer>
      <Option fill={perc1} chosen={answered === 'opt1'}>
        {opt1.text}
        <Stats>{votes1} of {votesTotes}, {perc1}%</Stats>
      </Option>
      <Option fill={perc2} chosen={answered === 'opt2'}>
        {opt2.text}
        <Stats>{votes2} of {votesTotes}, {perc2}%</Stats>
      </Option>
      <Legend>You voted for {answered === 'opt1' ? `"${opt1.text}"` : `"${opt2.text}"`}</Legend>
    </VotesContainer>
  );
}
