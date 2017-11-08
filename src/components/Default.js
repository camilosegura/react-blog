
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAll as fetchAllPosts } from '../actions/posts';

class Default extends Component{ 
  componentDidMount() {
    this.props.getAllPost();
  }
  
  render() {
    return (
      <div className="default">  
        Default Componet
        {this.props.posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <footer>
              <span>{post.voteScore} votes</span>
              <span> | by {post.author}</span>
              <span> | {post.commentCount} comments</span>
              <span> | created {new Date(post.timestamp).toLocaleDateString('en-US')}</span>
            </footer>            
          </article>
        ))}

      </div>
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

const mapDispatchToPtops = (dispatch) => ({
  getAllPost: () => dispatch(fetchAllPosts())
});

export default connect(mapStateToProps, mapDispatchToPtops)(Default);
