import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const PostComments = ({post}) => {
  return <Post post={post} listView={false} />
}

const mapStateToProps = (state, ownState) => {
  const posts = state.posts.filter(post => post.id === ownState.match.params.post_id);
  const post = posts.length && posts[0];

  return {
    post
  }
};

export default connect(mapStateToProps)(PostComments);
