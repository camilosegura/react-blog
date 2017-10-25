import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Category from './components/Category';
import Post from './components/Post';
import CreateEdit from './components/CreateEdit';

const NavbarWithRouter = withRouter(Navbar);
class App extends Component {
  render() {
    return (
      <div className="app">
        <NavbarWithRouter categories="hola category" />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Default} />
            <Route path='/category/:category' component={Category} />
            <Route path='/category/post/:post' component={Post} />
            <Route path='/category/post/:post/edit' component={CreateEdit} />
            <Route path='/category/post/create' component={CreateEdit} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
