import React, { Component } from 'react'; 

class InputField extends Component { 
	constructor (props) {
		super (props); 
		this.state = {value:this.props.value}

		this.handleChange = this.handleChange.bind(this); 
	}

	handleChange (e) {

		// send to parent component 
		this.props.handleFieldStatusChange(this.props.slug, e.target.value); 
		// local state for displaying value
		this.setState({value: e.target.value}); 
	}

	buildClasses () {
		return "form-group"
	}

	render () {
		return (
			<div className={this.buildClasses()} > 
				<label> { this.props.label } </label> 
				<input
					className="form-control"
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</div> 
		); 
	}
}

export default InputField; 