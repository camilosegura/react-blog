import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Category from './components/Category';
import Post from './components/Post';
import CreateEdit from './components/CreateEdit';
import { fetchAll as fetchAllPosts } from './actions/posts';
import { fetchAll as fetchAllCategories } from './actions/categories';

const NavbarWithRouter = withRouter(Navbar);

class App extends Component {
  componentDidMount() {
    this.props.getAllPost();
    this.props.getAllCategories()
  }

  render() {
    return (
      <div className="app">
        <NavbarWithRouter />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Default} />
            <Route path='/category/:category/posts' component={Category} />
            <Route path='/posts/create' component={CreateEdit} />
            <Route path='/posts/:id/edit' component={CreateEdit} />
            <Route path='/posts/:id' component={Post} />
            
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  getAllPost: () => dispatch(fetchAllPosts()),
  getAllCategories: () => dispatch(fetchAllCategories())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
