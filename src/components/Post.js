import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1'
import {withRouter} from "react-router-dom";
import { addByParent, editById as editCommentById, disableById as disableCommentById, voteById as voteCommentById} from '../actions/comments';
import { postDisable, postVote, increaseComments, decreaseComments } from '../actions/posts';
import Card from './Card';
import Modal from './Modal';
import { edit } from '../api/comments';

const ID_MODAL = 'modal-add-comments';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      author: '',
      body: '',
      onSubmit: () => {},
      edit: false
    };
    this.addComment = this.addComment.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.editComment = this.editComment.bind(this);
    this.onEditComment = this.onEditComment.bind(this)
    this.removeComment = this.removeComment.bind(this);
    this.voteDownComment = this.voteDownComment.bind(this);
    this.voteUpComment = this.voteUpComment.bind(this);
    this.voteDownPost = this.voteDownPost.bind(this);
    this.voteUpPost = this.voteUpPost.bind(this);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
  }

  addComment() {
    this.setState({
      id: '',
      author: '',
      body: '',
      onSubmit: this.onSubmit,
      edit: false
    })
    window.$(`#${ID_MODAL}`).modal('show');
  }

  edit(post) {
    this.props.history.push(`/${post.category}/${post.id}/edit`);
  }

  remove(id) {
    this.props.remove(id)
      .then(() => this.props.history.push(`/`));
  }

  editComment(comment) {

    this.setState({
      id: comment.id,
      author: comment.author,
      body: comment.body,
      onSubmit: this.onEditComment,
      edit: true
    }, () => {
      window.$(`#${ID_MODAL}`).modal('show');
    });
  }

  onEditComment(event) {
    event.preventDefault();
    const id = this.state.id;
    const comment = {
      id: this.state.id,
      body: this.state.body,
      timestamp: Date.now()
    }

    this.props.editComment(id, comment)
      .then((action) => window.$(`#${ID_MODAL}`).modal('hide'));

  }

  removeComment(id) {
    this.props.removeComment(id)
      .then(action => this.props.decreaseComments(this.props.post.id));
  }

  onSubmit(event) {
    event.preventDefault()

    const body = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      parentId: this.props.post.id
    };

    this.props.addComment(body)
      .then(action => {
        return this.props.increaseComments(this.props.post.id);
      })
      .then(action => window.$(`#${ID_MODAL}`).modal('hide'));

  }

  voteUpPost(id) {
    const option = 'upVote';
    this.props.vote(id, option);
  }

  voteDownPost(id) {
    const option = 'downVote';
    this.props.vote(id, option);
  }

  voteUpComment(id) {
    const option = "upVote";
    this.props.voteComment(id, option)
  }

  voteDownComment(id) {
    const option = "downVote";
    this.props.voteComment(id, option)
  }

  onChange() {
    this.setState({
      author: this.author.value,
      body: this.body.value
    })
  }

  render() {
    const { post, comments, listView } = this.props;

    return (
      <div className="post">
        <Card document={post} addComment={this.addComment} edit={this.edit} remove={this.remove} voteDown={this.voteDownPost} voteUp={this.voteUpPost} onListView={listView}>
          {!listView && comments.map(comment => (
            <Card document={comment} key={comment.id} edit={this.editComment} remove={this.removeComment} voteDown={this.voteDownComment} voteUp={this.voteUpComment} />
          ))}
        </Card>

        {!listView && <Modal id={ID_MODAL}>
          <form onSubmit={this.state.onSubmit}>
            <div className="form-group" style={{display: (this.state.edit && 'none') || 'block'}}>
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                placeholder="Author"
                ref={author => { this.author = author}}
                onChange={this.onChange}
                value={this.state.author}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                name="body"
                rows="3"
                ref={body => { this.body = body }}
                onChange={this.onChange}
                value={this.state.body}
              ></textarea>
            </div>
            <button className="btn btn-success" type="submit">Send</button>
          </form>
        </Modal> }
      </div>
        )
  }
}

const mapStateToProps = (state, ownState) => ({
  comments: state.comments.filter(comment => comment.parentId === ownState.post.id && !comment.deleted)
});

const mapDispatchToProps = dispatch => ({
  addComment: body => dispatch(addByParent(body)),
  editComment: (id, comment) => dispatch(editCommentById(id, comment)),
  removeComment: id => dispatch(disableCommentById(id)),
  voteComment: (id, option) => dispatch(voteCommentById(id, option)),
  remove: id => dispatch(postDisable(id)),
  vote: (id, option) => dispatch(postVote(id, option)),
  increaseComments: id => dispatch(increaseComments(id)),
  decreaseComments: id => dispatch(decreaseComments(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Post));
