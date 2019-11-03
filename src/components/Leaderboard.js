import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import styled from '@emotion/styled';
import {SubHeading} from './Headings';
import User from './User';

const Table = styled.table`
  width: 32rem;
  max-width: 100%;
  border-collapse: collapse;
  & thead {
    border-bottom: 2px solid black;
    & tr:first-child th {
      border: none;
      &:first-child {
        text-align: left;
        border-right: 1px solid silver;
      }
    }
  }
  & tr.selected {
    border: 2px solid gold;
  }
  & tr > td:first-child {
    text-align: left;
    border-left: none;
  }
  & th {
    text-align: center;
    vertical-align: bottom;
    font-weight: bold;
    padding: 0 1rem;
  }
  & td {
    text-align: center;
    padding: 0.5rem 1rem;
    border-left: 1px solid silver;
    border-top: 1px solid silver;
  }
`;

class Leaderboard extends Component {
  render() {
    const {authedUser, users} = this.props;
    const usersArray = Object.keys(users).map(id => {
      const user = users[id];
      const numAnswers = Object.keys(user.answers).length;
      const numQuestions = user.questions.length;

      return {
        ...user,
        numAnswers,
        numQuestions,
        total: numAnswers + numQuestions
      };
    });

    return (
      <Fragment>
        <SubHeading>Leaderboard</SubHeading>
        <Table>
          <thead>
            <tr>
             <th rowSpan="2" scope="col">User</th>
             <th colSpan="3">Questions</th>
            </tr>
            <tr>
              <th scope="col">Answered</th>
              <th scope="col">Added</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {
              usersArray.sort((a, b) => b.total - a.total).map(user => (
                <tr key={user.id} className={authedUser === user.id ? 'selected' : ''}>
                  <td><User user={user}/></td>
                  <td>{user.numAnswers}</td>
                  <td>{user.numQuestions}</td>
                  <td>{user.total}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

function mapStateToProps({authedUser, users}) {
  return {authedUser, users};
}

export default connect(mapStateToProps)(Leaderboard);
