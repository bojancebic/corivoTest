import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import {authenticateUser} from '../helpers';

class Login extends Component {

  state = {
    redirect: false
  }

  login = () => {
    authenticateUser.authenticate(() => {
      this.setState(() => ({
        redirect: true
      }))
    })
  }

  render() {
    const { from } = (this.props.location || {}).state || { from: { pathname: '/profile' } }
    const { redirect } = this.state

    if (redirect === true) {
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