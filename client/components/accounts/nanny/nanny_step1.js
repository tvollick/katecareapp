import React, { Component } from 'react'; 
import NannyForm from './nanny_form'; 

class NannyStep1 extends Component { 
	constructor (props) { 
		super (props); 
		this.state = {}; 
	}


	render () {
		return (
			<div id="nanny-step_1">
				<h1> Welcome to the Kate Care Nanny Portal</h1>
				<NannyForm/>
			</div>
		)
	}
}

export default NannyStep1; 