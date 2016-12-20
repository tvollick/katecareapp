import React, {Component} from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 


class DisplayField extends Component { 
	constructor (props) { 
		super(props); 

	}

	render () { 
		return (
			<div className="display-field"> 
				<h4> {this.props.label}</h4>
				<div className="field-falue">
					{this.props.value}
				</div>
			</div>
		); 
	}
}

export default DisplayField; 