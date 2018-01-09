import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { orderCreatedFirst, orderCreatedLast, orderVotedDown, orderVotedUp } from '../actions/posts';
class ControlsBar extends Component {

  render () {
    return (
      <ul className="nav">
          <li className="nav-item">
              <Link className="nav-link ion-compose" to="/create"></Link>
          </li>
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Order By</a>
              <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={() => this.props.votedUp()}>Voted More</button>
                  <button className="dropdown-item" onClick={() => this.props.votedDown()}>Voted Less</button>
                  <button className="dropdown-item" onClick={() => this.props.createdFirst()}>Created First</button>
                  <button className="dropdown-item" onClick={() => this.props.createdLast()}>Created Last</button>
              </div>
          </li>
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  createdFirst: posts => dispatch(orderCreatedFirst(posts)),
  createdLast: posts => dispatch(orderCreatedLast(posts)),
  votedUp: posts => dispatch(orderVotedUp(posts)),
  votedDown: posts => dispatch(orderVotedDown(posts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlsBar);
