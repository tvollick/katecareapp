import { Mongo } from 'meteor/mongo'; 
import { check, Match } from 'meteor/check';  

Meteor.methods({
	'family.apply': function (appData) {

		// checks? 

		return Families.insert({
			lastname: appData.lastname 
		}); 
	}, 
	'family.remove' : function (family) { 
		return Families.remove(family); 	
	}

}); 

export const Families = new Mongo.Collection('families'); 