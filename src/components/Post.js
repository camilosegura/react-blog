import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { fetchByParent as fetchComments } from '../actions/comments';
import Card from './Card';
import Modal from './Modal';

const ID_MODAL = 'modal-add-comments';

class Post extends Component {

  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }

  addComment() {
    window.$(`#${ID_MODAL}`).modal('show');
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
        <Modal id={ID_MODAL}>
           
        </Modal>
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
