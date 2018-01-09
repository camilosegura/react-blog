import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const PostComments = ({post}) =>
  <Post post={post} listView={false} />



const mapStateToProps = (state, ownState) => {
  const posts = state.posts.filter(post => post.id === ownState.match.params.post_id);
  const post = posts.length && posts[0];

  return {
    post
  }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
