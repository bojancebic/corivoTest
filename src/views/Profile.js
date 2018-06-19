import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Profile extends Component {

  render () {
    return (
    	<header>
    		<h1 className='logo'>
    			<span className='word1'>user</span>
  				<span className='word2'>profile</span>
  			</h1>
    		<Link to="/landing">go to landing page</Link>
    	</header>
    )
  }
}

export default Profile