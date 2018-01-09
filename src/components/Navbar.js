import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <Link to='/' className="navbar-brand">Blog</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {this.props.categories.map(category => {
                const { name, path } = category;
                return (
                  <li className="nav-item active" key={name}>
                    <Link className="nav-link" to={`/${path}`}>{name} <span className="sr-only">(current)</span></Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
});

export default connect(mapStateToProps)(Navbar);
