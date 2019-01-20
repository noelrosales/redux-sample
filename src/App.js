import React, { Component } from 'react';
import './App.css';
import PostList from './components/Post/PostList';
import CreatePost from './components/Post/CreatePost';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={CreatePost} />
          <Route path="/posts" component={PostList} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
