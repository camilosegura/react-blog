import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Category from './components/Category';
import Post from './components/PostComments';
import NotFound404 from './components/NotFound404';
import CreateEdit from './components/CreateEdit';
import { fetchAll as fetchAllPosts } from './actions/posts';
import { fetchAll as fetchAllCategories } from './actions/categories';
import { fetchByParent as fetchComments} from './actions/comments';

const NavbarWithRouter = withRouter(Navbar);

class App extends Component {
  componentDidMount() {
    this.props.getAllPost()
      .then(action => {
        this.props.posts.map(post => {
          this.props.getComments(post.id);
        })
      });
    this.props.getAllCategories();
  }

  render() {
    return (
      <div className="app">
        <NavbarWithRouter />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Default} />
            <Route exact path='/create' component={CreateEdit} />
            <Route exact path='/not-found' component={NotFound404} />
            <Route exact path='/:category' component={Category} />
            <Route path='/:category/:post_id/edit' component={CreateEdit} />
            <Route exact path='/:category/:post_id' component={Post} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  getAllPost: () => dispatch(fetchAllPosts()),
  getAllCategories: () => dispatch(fetchAllCategories()),
  getComments: id => dispatch(fetchComments(id)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
