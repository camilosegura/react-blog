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
    this.state = {
      author: '',
      body: ''
    };
    this.addComment = this.addComment.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  addComment() {
    window.$(`#${ID_MODAL}`).modal('show');
  }

  onSubmit(event) {
    event.preventDefault()
    console.log(this.state)
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
        <Card document={post} addComment={this.addComment}>
          {comments.map(comment => (
            <Card document={comment} key={comment.id} />
          ))}
        </Card>
        <Modal id={ID_MODAL}>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input 
                type="text" 
                className="form-control" 
                name="author" 
                placeholder="Author" 
                ref={author => { this.author = author}}
                onChange={this.onChange}
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
        comments: state.comments.filter(comment => comment.parentId === ownState.match.params.id)
  }
};

const mapDispatchToProps = dispatch => ({
          getComments: id => dispatch(fetchComments(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
