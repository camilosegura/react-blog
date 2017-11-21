import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByParent as fetchComments } from '../actions/comments';

class Post extends Component {
  componentDidMount() {
    this.props.getComments(this.props.match.params.id);
  }

  render() {
    const { post, comments } = this.props;
    
    return (
      <div className="post">
        
        <article key={post.id}>
          <h3>
            {post.title}
          </h3>
          <main>{post.body}</main>
          <footer>
            <span>{post.voteScore} votes</span>
            <span> | by {post.author}</span>
            <span> | {post.commentCount} comments</span>
            <span> | created {new Date(post.timestamp).toLocaleDateString('en-US')}</span>
          </footer>
          <div>
            { comments.map(comment => (
              <div>
                { comment.body }
              </div>
            )) }
          </div>            
        </article>
      </div>
    )
  }
}

const mapStateToProps = (state, ownState) => {
  const posts = state.posts.filter(post => post.id === ownState.match.params.id);
  const post = posts.length && posts[0];
  
  return {
    post,
    comments: state.comments.filter(comment => comment.parentId === ownState.match.params.id)
  }
};

const mapDispatchToProps = dispatch => ({
  getComments: id => dispatch(fetchComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
