
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';

class Default extends Component{
  render() {
    return (
      <Posts posts={this.props.posts} />
    );
  }
}

const mapStateToProps = state => (
  {
    posts: state.posts
  }
)

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Default);
