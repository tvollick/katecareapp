import React, { Component } from 'react'; 

class ParentApplication extends Component {
	constructor (props) {
		super (props); 
		this.state = { error: '' }; 
	}

	handleSubmit (event) {
		event.preventDefault(); 

		var AppData = {
			lastname: this.refs.lastname.value
		}; 

		Meteor.call('family.apply', AppData, (error) => {
			if (error) { 
				console.log(error); 
				this.setState({error: 'Some error info?'}); 
			} else {
				this.setState({error: ''}); 

				// can I loop through refs to clear? if we have a form of 20 fields?
				this.refs.lastname.value = ''; 
			}

		}); 

	}

	render () { 
		return (
			<div>
				<h3> Family Application </h3>
				<form onSubmit={this.handleSubmit.bind(this)} > 
					<div className="form-group">
						<label> Last Name </label>
						<input ref="lastname" className="form-control" /> 
					</div>
					<div className="text-danger">{this.state.error}</div>
					<button className="btn btn-primary"> Submit Application</button>
				</form>
			</div>
		); 
	}
}

export default ParentApplication; 