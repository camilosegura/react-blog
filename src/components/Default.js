
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';

const Default = ({posts}) => {
  return (
    <Posts posts={posts} />
  );
}

const mapStateToProps = state => (
  {
    posts: state.posts
  }
)

export default connect(mapStateToProps)(Default);
