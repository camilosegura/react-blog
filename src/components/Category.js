import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';

const Category = ({posts}) => (
  <div className="category">
    <Posts posts={posts} />
  </div>
)

const mapStateToProps = (state, ownState) => ({
  posts: state.posts.filter(post => (
    post.category === ownState.match.params.category
  ))
});

export default connect(mapStateToProps)(Category);
