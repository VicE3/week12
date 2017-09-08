import React, { Component } from 'react';
import './App.css';

Comment(props) {
  return (
    <li key={i}>{txt.text}
    <button className="LorDLBtn" onClick={() => this.handleLike(i)}> 👍<span className="numberOf">{this.state.comments[i].likes}</span></button>
    <button className="LorDLBtn" onClick={() => this.handleDislike(i)}> 👎<span className="numberOf">{this.state.comments[i].dislikes}</span></button>
    <button className="LorDLBtn" onClick={() => this.handleDelete(i)}>🗑</button>
    <button onChange={(e) => this.handleReplyChange(e, i)}>Reply <input className="replyBox" type="text" id="box"   value={this.state.comments[i].replyInput} /></button>
    <button onClick={() => this.handleReply(i)}>Submit</button>
    </li>
  )
}

export default Comment;
