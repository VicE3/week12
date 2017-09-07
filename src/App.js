import React, { Component } from 'react';
import './App.css';

const initState = {
 "commentAcessories": {
    'input': '',
    'thumbsUp': 0,
    'thumbsDown': 0
  },
  text: [],

}

class App extends Component {
  constructor() {
    super();
    this.state = initState;
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.delete = this.delete.bind(this);
    this.thumUp = this.thumUp.bind(this);
    this.thumDown = this.thumDown.bind(this);
  }

handleChange(e) {
  this.setState({
    input: e.target.value
  })
}

handleClick() {
  const copyOfState = Object.assign( {}, this.state);
  copyOfState.text.push(this.state.input);
  copyOfState.input = '';
  this.setState(copyOfState);
}

delete() {
  const copyOfState = Object.assign( {}, this.state);
  copyOfState.text.pop(this.state.input);
  copyOfState.input = '';
  this.setState(copyOfState);
}

thumUp(e) {
//let thum = this.state.thumbsUp;
let { thumbsUp } = this.state;
  thumbsUp++
  this.setState({
    thumbsUp,
  })
}

thumDown(event) {
thumDown: event.target.value
let thum = this.state.commentAcessories.thumbsDown;
  thum++
  this.setState({
    thumbsDown: thum,
  })
}


  render() {
    const addToPara = this.state.text.map(function(txt, i) {
       return (
         <li>{txt}<button onClick={this.delete}>Delete</button><button onClick={this.thumUp}>Thumbs Up {this.state.commentAcessories.thumbsUp}</button><button onClick={this.thumDown}>Thumbs Down {this.state.commentAcessories.thumbsDown}</button></li>
       )

    }, this);

    return (
      <div id='container'>
        <h1>Please Enter Text</h1>
        <input type="text" id="box" onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.handleClick}>Submit</button>
        <ul>
          {addToPara}
        </ul>
      </div>
    );
  }
}

export default App;
