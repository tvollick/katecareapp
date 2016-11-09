import { Mongo } from 'meteor/mongo'; 
import { check, Match } from 'meteor/check'; 

Meteor.methods({


	// nannies.apply
	'nannies.apply' : function (app) {
		// run checks? 

		return Nannies.insert({
			firstname: app.firstname,   
			approved: false
		}); 
	}, 

	'nannies.update.approve': function (_id) { 
		return Nannies.update(_id, {
			$set: {approved: true}
		});
	}, 

	'nannies.update.unapprove': function (_id) {
		return Nannies.update(_id, { $set: {approved: false}}); 
	},

	'nannies.remove' : function (nanny) {
		return Nannies.remove(nanny); 
	}

}); 

export const Nannies = new Mongo.Collection('nannies'); 
