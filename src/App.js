import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      questionAnswer: '',
      completedAnswers: [],
      currentQuestion: 0,
      questionsArray: ['Where are you from', 'what is your name', 'Do you like pizza']
    }
  }
  submitHandler(e) {
    e.preventDefault();
    const questionAnswer = this.state.questionAnswer;
    const completedAnswers = this.state.completedAnswers.slice();
    completedAnswers.push(questionAnswer);
    this.setState({completedAnswers, currentQuestion: this.state.currentQuestion + 1, questionAnswer: ''});
  }

  renderAnswers() {
    if (this.state.completedAnswers.length > 0) {
      return this.state.completedAnswers.map(
        (answer, i) => {
          return <li key={i}>
            {answer}
          </li>
        }
      )
    }
  }

  renderQuestions(){
    return <p>{this.state.questionsArray[this.state.currentQuestion]}</p>
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-logo" alt="logo" ></div>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.renderQuestions()}
        </p>
        <form onSubmit={this.submitHandler.bind(this)}>
          <input value={this.state.questionAnswer} onChange={
            (e) => {
              this.setState({questionAnswer: e.target.value})
              }}/> 
        </form>
        <ul>
          {this.renderAnswers()}
        </ul>
      </div>
    );
  }
}

export default App;
