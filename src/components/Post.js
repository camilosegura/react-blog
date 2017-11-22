import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByParent as fetchComments } from '../actions/comments';
import Card from './Card';

class Post extends Component {

  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }

  addComment() {
    console.log(this.props)
  }

  componentDidMount() {
    this.props.getComments(this.props.match.params.id);
  }

  render() {
    const { post, comments } = this.props;
    console.log(comments)
    return (
      <div className="post">
        <Card document={post} addComment={this.addComment}>
          { comments.map(comment => (
            <Card document={comment} key={comment.id} />
          )) }
        </Card>  
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
