import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Router, IndexRedirect, Link, Route, browserHistory} from "react-router";

import Comments from './Comments';
import About from './About';
import './index.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Playground</h2>
          <ul className="links">
            <li className="link">
              <Link to="/about">About</Link>
            </li>
            <li className="link">
              <Link to="/comments">Comments</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>LOL wrong URL</h1>
      </div>
    );
  }
}


// var routes = (
//   <Route name="app2" path="/" handler={App2}>
//     <Route name="app" handler={App} />
//   </Route>
// );

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="about" />
      <Route path="about" component={About} />
      <Route path="comments" component={Comments} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
  ), document.getElementById('root'));
