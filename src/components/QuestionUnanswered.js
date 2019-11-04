import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Fieldset, RadioButton, RadioButtonLabel} from './FormElements';
import {handleSaveQuestionAnswer} from '../actions/shared';

class QuestionUnanswered extends Component {
  state = {
    value: ''
  }

  handleSubmit = e => {
    e.preventDefault();

    const {question} = this.props;

    this.props.dispatch(handleSaveQuestionAnswer(question.id, this.state.value));
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  render() {
    const {
      question: {optionOne, optionTwo}
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <Fieldset>
          <legend className="sr-only">Question options</legend>
          <RadioButtonLabel htmlFor="option1" className={this.state.value === 'option1' ? 'selected' : ''}>
            <RadioButton
              type="radio"
              id="option1"
              name="questionOptions"
              value="optionOne"
              checked={this.state.value === 'optionOne'}
              onChange={this.handleChange}
            />
            {optionOne.text}
          </RadioButtonLabel>
          <RadioButtonLabel htmlFor="option2" className={this.state.value === 'option2' ? 'selected' : ''}>
            <RadioButton
              type="radio"
              id="option2"
              name="questionOptions"
              value="optionTwo"
              checked={this.state.value === 'optionTwo'}
              onChange={this.handleChange}
            />
            {optionTwo.text}
          </RadioButtonLabel>
        </Fieldset>
        <Button disabled={!this.state.value}>Submit your answer</Button>
      </form>
    );
  }
}

function mapStateToProps({questions}, props) {
  const question = questions[props.id];

  return {
    question
  };
}

export default connect(mapStateToProps)(QuestionUnanswered);
