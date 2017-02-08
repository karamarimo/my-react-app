import React, { Component } from 'react';
import './Comments.css';

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      editing: false
    };
  }

  edit() {
    this.setState({editing: true});
  }

  remove() {
    this.props.delete(this.props.index);
  }

  save() {
    var val = this.textInput.value;
    this.props.update(val, this.props.index);
    this.setState({editing: false});
  }

  renderNormal() {
    return (
      <div className="commentContainer">
        <div className="commentText">{this.props.children}</div>
        <button onClick={this.edit.bind(this)} className="button-primary">Edit</button>
        <button onClick={this.remove.bind(this)} className="button-danger">Remove</button>
      </div>
    );
  }

  renderForm() {
    return (
      <div className="commentContainer">
        <textarea className="commentEdit" ref={input => this.textInput = input} defaultValue={this.props.children}></textarea>
        <button onClick={this.save.bind(this)} className="button-success">Save</button>
      </div>
    );
  }
  
  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
}

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [
        'first comment ever', 'comment 2', 'com 3'
      ]
    };
  }

  addComment(text) {
    var coms = this.state.comments;
    coms.push(text);
    this.setState({comments: coms});
  }

  removeComment(i) {
    console.log("removing: " + i);
    var coms = this.state.comments;
    coms.splice(i, 1);                // remove the i-th item
    this.setState({comments: coms});
  }

  updateComment(newText, i) {
    console.log("updating: " + i + " to " * newText);
    var coms = this.state.comments;
    coms[i] = newText;
    this.setState({comments: coms});
  }

  eachComment(com, i) {
    return (
      <Comment key={i} index={i} 
          update={this.updateComment.bind(this)} 
          delete={this.removeComment.bind(this)}>
        {com}
      </Comment>
    );
  }

  render() {
    return (
      <div>
        <button className="button-add" onClick={this.addComment.bind(this, "Default text")}>
          Add Comments
        </button>
        <div className="board">
          {this.state.comments.map(this.eachComment.bind(this))}
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
