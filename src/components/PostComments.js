import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class PostComments extends Component {
  componentWillReceiveProps(newProps) {
    console.log({newProps})
    newProps.post === 0 && this.props.history.push(`/not-found`);
  }
  render() {
    return <Post post={this.props.post} listView={false} />
  }
}

const mapStateToProps = (state, ownState) => {
  const posts = state.posts.filter(post => post.id === ownState.match.params.post_id);
  const post = posts.length && posts[0];
  console.log(posts)
  return {
    post
  }
};

export default connect(mapStateToProps)(PostComments);
