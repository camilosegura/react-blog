import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1'
import { fetchByParent as fetchComments, addByParent, editById as editCommentById, disableById as disableCommentById, voteUpById as voteUpCommentById, voteDownById as voteDownCommentById} from '../actions/comments';
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

  edit() {

  }

  remove() {

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

  }

  removeComment(id) {
    this.props.removeComment(id);
  }

  onSubmit(event) {
    event.preventDefault()
    
    const body = {
      id: uuidv1(),
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      parentId: this.props.match.params.id
    };

    this.props.addComment(body);

  }

  voteUpPost(id) {
    debugger
  }

  voteDownPost(id) {
    debugger
  }

  voteUpComment(id) {
    const body = {
      option: "upVote"
    };
    this.props.voteUpComment(id, body)
  }

  voteDownComment(id) {
    const body = {
      option: "downVote"
    };
    this.props.voteDownComment(id, body)
  }

  onChange() {
    this.setState({
      author: this.author.value,
      body: this.body.value
    })
  }

  componentDidMount() {
    this.props.getComments(this.props.match.params.id);
  }

  render() {
    const { post, comments } = this.props;
    console.log(comments)
    return (
      <div className="post">
        <Card document={post} addComment={this.addComment} voteDown={this.voteDownPost} voteUp={this.voteUpPost}>
          {comments.map(comment => (
            <Card document={comment} key={comment.id} edit={this.editComment} remove={this.removeComment} voteDown={this.voteDownComment} voteUp={this.voteUpComment} />
          ))}
        </Card>
        <Modal id={ID_MODAL}>
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
        comments: state.comments.filter(comment => comment.parentId === ownState.match.params.id && !comment.deleted)
  }
};

const mapDispatchToProps = dispatch => ({
          getComments: id => dispatch(fetchComments(id)),
          addComment: body => dispatch(addByParent(body)),
          editComment: (id, comment) => dispatch(editCommentById(id, comment)),
          removeComment: id => dispatch(disableCommentById(id)),
          voteUpComment: (id, option) => dispatch(voteUpCommentById(id, option)),
          voteDownComment: (id, option) => dispatch(voteDownCommentById(id, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
