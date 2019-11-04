import React, {Component, Fragment} from 'react';
import {handleSaveQuestion} from '../actions/shared';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from '@emotion/styled';
import {SubHeading} from './Headings';
import {Button, Label, TextField} from './FormElements';

const Option = styled.span`
  font-style: italic;
`;

class QuestionAddForm extends Component {
  state = {
    goHome: false,
    option1: '',
    option2: ''
  }

  handleChange = e => {
    const {id, value} = e.target;
    this.setState({[id]: value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const {option1, option2} = this.state;

    this.props.dispatch(handleSaveQuestion(option1, option2))
      .then(() => (
        this.setState({
          goHome: true,
          option1: '',
          option2: ''
        })
      ))
  }

  render() {
    const {goHome, option1, option2} = this.state;

    return (
      goHome
      ? <Redirect to="/"/>
      : <Fragment>
          <SubHeading>Add a new question</SubHeading>
          <p>Would you rather [<Option>Option 1</Option>] or [<Option>Option 2</Option>]?</p>
          <form onSubmit={this.handleSubmit}>
            <Label htmlFor="option1">Option 1</Label>
            <TextField
              type="text"
              id="option1"
              value={option1}
              placeholder="Enter the text for option 1"
              onChange={this.handleChange}
            />
            <Label htmlFor="option2">Option 2</Label>
            <TextField
              type="text"
              id="option2"
              value={option2}
              placeholder="Enter the text for option 2"
              onChange={this.handleChange}
            />
            <Button disabled={!this.state.option1 || !this.state.option2}>Submit</Button>
          </form>
        </Fragment>
    );
  }
}

export default connect()(QuestionAddForm);
