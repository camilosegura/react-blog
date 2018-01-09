import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';

class Category extends Component {
  render() {
    return (
      <div className="category">
        <Posts posts={this.props.posts} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownState) => ({
  posts: state.posts.filter(post => (
    post.category === ownState.match.params.category
  ))
});

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Category);
