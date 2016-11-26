import { Mongo } from 'meteor/mongo'; 

Meteor.methods({
	'notify.newNanny': function (userId, info) {

		return Notifications.insert({

			userId: userId, 
			message: `You have a new ${info.profile.accounttype} user with the email ${info.email}! Send email to welcome user!`, 
			isCompleted: false, 
			isRead: false

		}); 

	}, 

	'notify.complete': function (_id, isComplete) { 
		console.log(isComplete); 
		return Notifications.update(_id, { 
			$set: {isCompleted: isComplete}
		})
	}
})

export const Notifications = new Mongo.Collection('notifications'); 