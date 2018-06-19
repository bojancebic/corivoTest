import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import {authenticateUser} from '../helpers';

class Login extends Component {

  state = {
    redirectToReferrer: false
  }

  login = () => {
    authenticateUser.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    const { from } = (this.props.location || {}).state || { from: { pathname: '/profile' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <p>Login page</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export default Login