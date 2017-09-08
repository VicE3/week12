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
    this.handleDislikeReply = this.handleDislikeReply.bind(this);
    this.handleLikeReply = this.handleLikeReply.bind(this);
    this.handleDeleteReply = this.handleDeleteReply.bind(this);
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
if(this.state.input === '') {
  return;
}
  const copyOfState = Object.assign( {}, this.state);
  let commentGrouping =
    {text: this.state.input, likes: 0, dislikes: 0, replies: [], replyInput: ""}
  copyOfState.comments.push(commentGrouping);
  copyOfState.input = '';
  this.setState(copyOfState);
}

handleLike(i) {
  const copyOfState = Object.assign( {}, this.state);
  copyOfState.comments[i].likes++;

  this.setState(copyOfState)
}

handleDislike(i) {
  const copyOfState = Object.assign( {}, this.state);
  copyOfState.comments[i].dislikes++;
  this.setState(copyOfState)
}

handleDelete(i) {
  const copyOfState = Object.assign( {}, this.state);
  delete copyOfState.comments[i]
  this.setState(copyOfState)
}

handleLikeReply(i, x) {
  const copyOfState = Object.assign( {}, this.state);
  copyOfState.comments[i].replies[x].likes++;

  this.setState(copyOfState)
}

handleDislikeReply(i, x) {
  const copyOfState = Object.assign( {}, this.state);
  copyOfState.comments[i].replies[x].dislikes++;
  this.setState(copyOfState)
}

handleDeleteReply(i, x) {
  const copyOfState = Object.assign( {}, this.state);
  delete copyOfState.comments[i].replies[x]
  this.setState(copyOfState)
}

handleReply(i) {
//NOW POPULATE REPLIES WITH THE OBJECT {TEXT: replyInput, LIKES: 0, DISLIKES:0,}
//SET STATE AGAIN
  const copyOfState = Object.assign( {}, this.state);
  const replyGrouping = {text: copyOfState.comments[i].replyInput, likes: 0, dislikes: 0,}
  copyOfState.comments[i].replies.push(replyGrouping);
  copyOfState.comments[i].replyInput = '';
  this.setState(copyOfState);
}

handleReplyChange(e, i) {
const copyOfState = Object.assign( {}, this.state);
copyOfState.comments[i].replyInput = e.target.value
  this.setState(copyOfState)
}

  render() {
    const addToPage = this.state.comments.map(function(txt, i) {

      let addToRep = txt.replies.map(function(rep, x) {
        return(
          <li key={x}>{rep.text}
            <button className="LorDLBtn" onClick={() => this.handleLikeReply(i, x)}> 👍<span className="numberOf">{rep.likes}</span></button>
            <button className="LorDLBtn" onClick={() => this.handleDislikeReply(i, x)}> 👎<span className="numberOf">{rep.dislikes}</span></button>
            <button className="LorDLBtn" onClick={() => this.handleDeleteReply(i, x)}>🗑</button>
          </li>
        );
      } ,this);

      return (
        <li key={i}>{txt.text}
          <button className="LorDLBtn" onClick={() => this.handleLike(i)}> 👍<span className="numberOf">{txt.likes}</span></button>
          <button className="LorDLBtn" onClick={() => this.handleDislike(i)}> 👎<span className="numberOf">{txt.dislikes}</span></button>
          <button className="LorDLBtn" onClick={() => this.handleDelete(i)}>🗑</button>
          <button onChange={(e) => this.handleReplyChange(e, i)}>Reply <input className="replyBox" type="text" id="box"   value={txt.replyInput} /></button>
          <button onClick={() => this.handleReply(i)}>Submit</button>
          <ul>
            {addToRep}
          </ul>
        </li>
      )
    } , this)
    return (
      <div id='container'>
        <h1>Please Leave a Comment</h1>
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
