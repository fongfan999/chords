import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="pt-navbar">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">Chord Creator</div>
          {
            this.props.authenticated ?
            <input className="pt-input" placeholder="Search Songs..." /> :
            null
          }
        </div>
        { this.props.authenticated ?
          (
            <div className="pt-navbar-group pt-align-right">
              <Link className="pt-button pt-minimal pt-icon-music" to="/songs">Song</Link>
              <span className="pt-navbar-driver"></span>
              <button className="pt-button pt-minimal pt-icon-user"></button>
              <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout" aria-label="Log out"></Link>
            </div>
          ) :
          (
            <div className="pt-navbar-group pt-align-right">
              <Link className="pt-button pt-intent-primary" to="/login">Register/Login</Link>
            </div>
          )
        }
      </nav>
    );
  }
}

export default Header;
