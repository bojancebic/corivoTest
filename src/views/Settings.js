import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Settings extends Component {

  leavePage(event) {
  	if (!window.confirm("Are you sure you want to leave page?")) { 
	  	event.preventDefault();
  	}
  }

  render () {
    return (
    	<header>
    		<h1 className='logo'>
    			<span className='word1'>user</span>
  				<span className='word2'>settings</span>
  			</h1>
    		<Link onClick={this.leavePage} to="/landing">go to landing page</Link>
    	</header>
    )
  }
}

export default Settings