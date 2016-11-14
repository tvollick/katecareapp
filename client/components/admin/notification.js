import React, {Component} from 'react'; 

class Notification extends Component { 

	markIncomplete () { 
		Meteor.call('notify.complete', this.props.notiData._id, false, (error) => {
			if (error) { 
				console.log('error'); 
			}
		}); 	
	}

	markComplete () { 
		Meteor.call('notify.complete', this.props.notiData._id, true, (error) => {
			if (error) { 
				console.log('error'); 
			}
		}); 
	}

	renderButtons () { 
		if (this.props.notiData.isCompleted) {
			return (
				<button 
					className="btn btn-warning"
					onClick={this.markIncomplete.bind(this)}
				> 
				Mark Incomplete
				</button> 
			); 
		} else { 
			return (
				<button 
					className="btn btn-success"
					onClick={this.markComplete.bind(this)}
				> 
				Mark Complete
				</button> 
			); 			
		}
	}

	render () {
		return (
			<li className="list-group-item"> 
				<h4> {this.props.notiData.message} </h4> 
				<div className="btn-group"> 
					{this.renderButtons()}
				</div> 
			</li> 
		); 
	}

}

export default Notification; 