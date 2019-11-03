import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {setAuthedUser} from '../actions/authedUser';
import {Button, Dropdown, Label} from './FormElements';

class Login extends Component {
  state = {
    redirectToReferrer: false,
    selectedUser: ''
  }

  handleChange = e => {
    this.setState({selectedUser: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
    this.setState({redirectToReferrer: true});
  }

  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      );
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <Label htmlFor="username">Please login as one of the following</Label>
        <Dropdown id="username" value={this.state.selectedUser} onChange={this.handleChange}>
          <option value=''>Select a user</option>
          {this.props.users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </Dropdown>
        <Button disabled={!this.state.selectedUser}>Sign in</Button>
      </form>
    );
  }
}

function mapStateToProps({users}) {
  return {
    users: Object.keys(users).map(user => users[user])
  };
}

export default connect(mapStateToProps)(Login);
