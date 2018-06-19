import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Landing extends Component {

  render () {
    return (
      <header>
        <h1 className='logo'>
          <span className='word1'>landing</span>
          <span className='word2'>page</span>
        </h1>
        <Link to={{ pathname: '/login', state: { from: this.props.location.pathname } }}>go to login page</Link>
        <Link to="/settings">go to settings page</Link>
        <Link to="/profile">go to profil page</Link>
      </header>
    );
  }
}

export default Landing