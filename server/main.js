import { Meteor } from 'meteor/meteor'; 
import { Nannies } from '../imports/collections/nannies';
import { Families } from '../imports/collections/families'; 
import { WebApp } from 'meteor/webapp'; 
import ConnectRoute from 'connect-route'; 

Meteor.startup( () => {
	Meteor.publish('nannies', function () {
		return Nannies.find({}); 
	}); 
	Meteor.publish('families', function () { 
		return Families.find({}); 
	}); 
}); 

