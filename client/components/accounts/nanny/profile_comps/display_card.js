import React, {Component} from 'react'; 
import {Link} from 'react-router'; 
import DisplayField from './display_field'; 

class DisplayCard extends Component {
	constructor (props) { 
		super (props); 

		this.renderFields = this.renderFields.bind(this); 
	}

	renderFields () {
		console.log(this.props.fields,'fields');
		return this.props.fields.map((field, i) => {
			return (
				<DisplayField 
					key={"key-"+this.props.label+"-"+i} 
					label={field.label} 
					value={field.value} 
				/> 
			); 
		}); 
	}

	renderLink () {
		return (
			<Link 
				to={this.props.editLink}
				className="btn btn-warning"
			>	
				{"Edit "+this.props.label}
			</Link>	
		); 
	}

	render () { 
		return (
			<div className="card card-block">
				<h2> {this.props.label}</h2>
				{this.renderFields()}
				{this.renderLink()} 
			</div>
		); 
	}
}

export default DisplayCard; 