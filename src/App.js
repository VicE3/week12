import React, { Component } from 'react';
import './App.css';

const initState = {
  input: '',
  comments: [
    {text: '', likes: 0, dislikes: 0, replies: [
      {text: '', likes: 0, dislikes: 0,}
    ]}
  ],
}

class App extends Component {
  constructor() {
    super();
    this.state = initState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

handleChange(e) {
//TAKE VALUE OF INPUT FIELD, SET IT EQUAL TO INPUT, UPDATE THE STATE
  this.setState({
    input: e.target.value
  })
}

handleSubmit() {
// GET COPY OF STATE - COPYOFSTATE
// CREATE NEW COMMENT - COMMENT.TEXT = THIS.STATE.input
// ADD NEW COMMENT TO COPYSTATECOPY W/ COPYOFSTATE.COMMENTS.PUSH(COMMENT)
// UPDATE STATE WITH COPYOFSTATE
  const copyOfState = Object.assign( {}, this.state);
  copyOfState.comments.text = this.state.input;
  copyOfState.comments.push(copyOfState.comments.text);
  copyOfState.input = '';
  this.setState(copyOfState);
}

handleLike() {
  let increaseLikes = this.state.comments[0].likes++
  this.setState({
    likes: increaseLikes
  })
}


  render() {
    const addToPage = this.state.comments.map(function(txt, i) {
      return (
        <li>{txt.text}<button onClick={this.handleLike}>like</button></li>
      )
    } , this)
    return (
      <div id='container'>
        <h1>Please Enter Text</h1>
        <input type="text" id="box"  onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
          {addToPage}
        </ul>
      </div>
    );
  }
}

export default App;
