import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleGetUsers} from '../actions/users';
import {handleGetQuestions} from '../actions/questions';
import {isEmpty} from '../utils/helpers';
import styled from '@emotion/styled';
import LoadingBar from 'react-redux-loading';
import Header from './Header';
import {MainHeading} from './Headings';
import Home from './Home';
import Question from './Question';
import QuestionAddForm from './QuestionAddForm';
import Leaderboard from './Leaderboard';
import Login from './Login';

const ProtectedRoute = ({component: Component, isAuthenticated, ...rest}) => (
  <Route {...rest} render={props => (
    isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: {from: props.location}
        }}/>
  )}/>
);

const AppWrapper = styled.main`
  max-width: 64rem;
  height: calc(100% - 0.5rem);
  overflow-y: auto;
  margin: 0.25rem auto;
  padding: 1rem;
  text-align: left;
  position: relative;
  background-color: #fff;
  border: 2px outset silver;
`;

class App extends Component {
  componentDidMount() {
    const {dispatch, questions, users} = this.props;

    if (isEmpty(users)) {
      dispatch(handleGetUsers());
    }
    if (isEmpty(questions)) {
      dispatch(handleGetQuestions());
    }
  }

  render() {
    const {isAuthenticated} = this.props;

    return (
      <Router>
        <LoadingBar/>
        <AppWrapper>
          {isAuthenticated && (
            <Header/>
          )}
          <MainHeading>Would you rather...?</MainHeading>
          <ProtectedRoute exact path='/' component={Home} isAuthenticated={isAuthenticated}/>
          <ProtectedRoute path='/new' component={QuestionAddForm} isAuthenticated={isAuthenticated}/>
          <ProtectedRoute path='/questions/:id' component={Question} isAuthenticated={isAuthenticated}/>
          <ProtectedRoute path="/leaderboard" component={Leaderboard} isAuthenticated={isAuthenticated}/>
          <Route path='/login' component={Login}/>
        </AppWrapper>
      </Router>
    );
  }
}

function mapStateToProps({authedUser, questions, users}) {
  return {
    isAuthenticated: !!authedUser,
    questions,
    users
  };
}

export default connect(mapStateToProps)(App);
