import React, {Component} from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import { Notifications } from '../../../imports/collections/notifications'; 
import Notification from './notification'; 

class NotificationsList extends Component {

	incompleteList () { 
		return this.props.incomplete.map(notiData => {
			return (
				<Notification key={notiData._id} notiData={notiData} /> 
			); 
		})
	}

	completedList () { 
		return this.props.completed.map(notiData => {
			return (
				<Notification key={notiData._id} notiData={notiData} /> 
			); 
		})

	}

	render () { 
		return (
			<div className="notifications"> 
				<h4> Incomplete Notifications </h4> 
				<ul className="list-group"> 
					{this.incompleteList()}
				</ul> 
				<h4> Completed Notifications </h4> 
				<ul className="list-group"> 
					{this.completedList()}
				</ul> 
			</div> 
		); 
	}

}

export default createContainer(() => {
	Meteor.subscribe('notifications'); 
	return { 
		incomplete: Notifications.find({isCompleted:false}).fetch(), 
		completed: Notifications.find({isCompleted:true}).fetch()
	}; 
}, NotificationsList) ;