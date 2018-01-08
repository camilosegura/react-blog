import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1'
import { postNew, postEdit } from '../actions/posts';

class CreateEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      author: '',
      category: ''
    }

    this.onEdit = this.onEdit.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onCreate(event) {
    event.preventDefault()

    const post = {
      id: uuidv1(),
      timestamp: Date.now(),
      title: this.state.title,
      category: this.state.category,
      body: this.state.body,
      author: this.state.author,
    };

    this.props.create(post)
      .then(() => this.props.history.push(`/`));
  }

  onEdit(event) {
    event.preventDefault();

    const post = {
      id: this.props.post[0].id,
      title: this.state.title,
      body: this.state.body
    };

    this.props.edit(post);
  }

  onChange() {
    this.setState({
      title: this.title.value,
      body: this.body.value,
      author: this.author && this.author.value,
      category: this.category && this.category.value
    })
  }

  updateState() {
    if (!this.props.creating) {
      this.setState(
        this.props.post[0]
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updateState();
    }

  componentDidMount() {
    this.updateState();
  }

  render() {
    console.log(this.state)
    return (
      <div className="create-edit">
        <form onSubmit={ (this.props.creating && this.onCreate) || this.onEdit }>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              ref={title => { this.title = title}}
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          {this.props.creating && <div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              id="category"
              ref={category => { this.category = category}}
              onChange={this.onChange}
              value={this.state.category}
            >
              {this.props.categories.map(category => (
                <option value={category.name} key={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              ref={author => { this.author = author}}
              onChange={this.onChange}
              value={this.state.author}
            />
          </div>
          </div>}
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              className="form-control"
              id="body"
              rows="3"
              ref={body => { this.body = body }}
              onChange={this.onChange}
              value={this.state.body}
            ></textarea>
          </div>
          <button className="btn btn-success" type="submit">Send</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownState) => ({
    categories: state.categories,
    creating: ownState.match.path === '/posts/create' ? true : false,
    post: state.posts.filter(post => (
      post.id === ownState.match.params.id
    ))
});

const mapDispatchToProps = dispatch => ({
  create: post => dispatch(postNew(post)),
  edit: post => dispatch(postEdit(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEdit);
