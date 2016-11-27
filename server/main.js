import { Meteor } from 'meteor/meteor'; 
import { Nannies } from '../imports/collections/nannies';
import { Families } from '../imports/collections/families';
import { UserFields } from '../imports/collections/user_fields'; 

import { Notifications} from '../imports/collections/notifications'; 
import { WebApp } from 'meteor/webapp'; 
import ConnectRoute from 'connect-route'; 

Meteor.startup( () => {

	// if admin publish notifications? 

	Meteor.publish('notifications', function () {
		return Notifications.find({}); 
	}); 

	Meteor.publish('adminNannies', function () {
		return Nannies.find({}); 
	}); 

	Meteor.publish('families', function () { 
		return Families.find({}); 
	}); 

	Meteor.publish('nannyApplication', function () { 
		return Nannies.find({userId: this.userId }); 
	}); 

	Meteor.publish('userFields', function () {
		return UserFields.find({userId: this.userId }); 
	}); 

}); 

