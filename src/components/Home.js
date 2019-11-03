import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from '@emotion/styled';
import QuestionLink from './QuestionLink';

const StyledTab = styled(Tab)`
  font-family: 'death_starregular', serif;
  font-size: 1rem;
  color: black;
  -webkit-text-fill-color: silver;
  -webkit-text-stroke-width: 0.75px;
  -webkit-text-stroke-color: black;
`;

StyledTab.tabsRole = 'Tab';

const StyledTabPanel = styled(TabPanel)`
  padding: 1rem;
  overflow-y: auto;
`;

StyledTabPanel.tabsRole = 'TabPanel';

class Home extends Component {
  render() {
    const {answeredQuestions, unansweredQuestions, users} = this.props;

    return (
      <Tabs>
        <TabList>
          <StyledTab>Unanswered</StyledTab>
          <StyledTab>Answered</StyledTab>
        </TabList>

        <StyledTabPanel>
          <h2 className="sr-only">Unanswered questions</h2>
          {unansweredQuestions.length ? unansweredQuestions.map(question => (
            <QuestionLink key={question.id} question={question} user={users[question.author]}/>
          )) : <p>I felt a great disturbance in the Force, as if millions of questions suddenly cried out in terror and
          were suddenly silenced...</p>}
        </StyledTabPanel>
        <StyledTabPanel>
          <h2 className="sr-only">Answered questions</h2>
          {answeredQuestions.length ? answeredQuestions.map(question => (
            <QuestionLink key={question.id} question={question} user={users[question.author]}/>
          )) : <p>I find your lack of questions disturbing.</p>}
        </StyledTabPanel>
      </Tabs>
    );
  }
}

function mapStateToProps({authedUser, questions, users}) {
  const compareTime = (a, b) => b.timestamp - a.timestamp;
  const allQuestions = Object.keys(questions).map(question => questions[question]);
  const answeredQuestions = allQuestions
    .filter(question => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
    .sort(compareTime);
  const unansweredQuestions = allQuestions
    .filter(question => !answeredQuestions.includes(question))
    .sort(compareTime);

  return {
    allQuestions,
    answeredQuestions,
    unansweredQuestions,
    users
  };
}

export default connect(mapStateToProps)(Home);
