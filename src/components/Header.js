import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from '@emotion/styled';
import Nav from './Nav';
import User from './User';
import {Button} from './FormElements';
import {setAuthedUser} from '../actions/authedUser';

const LoggedInUser = styled.div`
  float: right;
  & > button {
    margin-left: 1rem;
  }
  @media (max-width: 414px) {
    float: none;
    margin-top: 1rem;
  }
`;

class Header extends Component {
  logout = e => this.props.dispatch(setAuthedUser(''));

  render() {
    const {user} = this.props;

    return (
      <header>
        <Nav/>
        <LoggedInUser>
          You are <User user={user}/>
          <Button onClick={this.logout}>Logout</Button>
        </LoggedInUser>
      </header>
    );
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    user: users[authedUser]
  };
}

export default connect(mapStateToProps)(Header);
