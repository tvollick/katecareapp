import { Meteor } from 'meteor/meteor'; 
import { Nannies } from '../imports/collections/nannies';
import { WebApp } from 'meteor/webapp'; 
import ConnectRoute from 'connect-route'; 

Meteor.startup( () => {
	Meteor.publish('nannies', function () {
		return Nannies.find({}); 
	}); 
}); 

