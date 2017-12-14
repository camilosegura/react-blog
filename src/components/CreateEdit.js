import React from 'react';

const CreateEdit = (props) => (
  <div className="create-edit">
    <form onSubmit={this.state.onSubmit}>
      <div className="form-group">
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
  </div>
);

export default CreateEdit;
