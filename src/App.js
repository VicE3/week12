import React, { Component } from 'react';
import './App.css';

const initState = {
  input: '',
  comments: [],
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
  let commentGrouping =
    {text: this.state.input, likes: 0, dislikes: 0, replies: [
      {text: '', likes: 0, dislikes: 0,}
    ]}
  copyOfState.comments.push(commentGrouping);
  copyOfState.input = '';
  this.setState(copyOfState);
}

handleLike(i) {
  const copyOfState = Object.assign( {}, this.state);
  let increaseLikes = (copyOfState.comments[i].likes++)

  this.setState(copyOfState)
}

handleDislike(i) {
  const copyOfState = Object.assign( {}, this.state);
  let increaseLikes = (copyOfState.comments[i].dislikes++)
  this.setState(copyOfState)
}

handleDelete(i) {
  const copyOfState = Object.assign( {}, this.state);
  delete copyOfState.comments[i]
  this.setState(copyOfState)
}

handleReply(i) {

}

  render() {
    const addToPage = this.state.comments.map(function(txt, i) {
      return (
        <li>{txt.text}
        <button onClick={() => this.handleLike(i)}>Like {this.state.comments[i].likes}</button>
        <button onClick={() => this.handleDislike(i)}>Dislike {this.state.comments[i].dislikes}</button>
        <button onClick={() => this.handleDelete(i)}>Delete</button>
        <button onClick={() => this.handleReply(i)}>Reply</button>
        </li>
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
