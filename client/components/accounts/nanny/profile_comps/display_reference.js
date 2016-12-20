import React, {Component} from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 


class DisplayReference extends Component { 
	constructor(props){
		super(props);
	}

	renderField(label, value) { 
		if (value){
			return (
				<li> 	
					<span className="contact-field-label">{label}</span>
					{value}
				</li> 
			); 
		}
	}

	renderFields () { 

	}

	render () { 
		const reference = this.props.reference;
		return (
			<div className="display-reference">
				<ul className="contact-card">
					{this.renderField("Name", reference.name)}
					{this.renderField("Phone", reference.phone)}
					{this.renderField("Email", reference.email)}
					{this.renderField("Best Time to Call (if applicable)", reference.availability)}

				</ul>
			</div>
		); 

	}

}

export default DisplayReference; 