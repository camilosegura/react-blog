
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';

class Default extends Component{ 
  render() {
    return (
      <Posts posts={this.props.posts} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.sort((a, b) => (
      b.voteScore - a.voteScore
    ))
  }
}

const mapDispatchToPtops = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToPtops)(Default);
