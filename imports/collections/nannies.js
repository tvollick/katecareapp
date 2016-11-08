import { Mongo } from 'meteor/mongo'; 
import { check, Match } from 'meteor/check'; 

Meteor.methods({


	// nannies.apply
	'nannies.apply' : function (app) {
		// run checks? 

		Nannies.insert({
			firstname: app.firstname,   
			approved: false
		}); 
	}, 

	'nannies.update.approve': function (_id) { 
		Nannies.update(_id, {
			$set: {approved: true}
		});
	}, 

	'nannies.update.unapprove': function (_id) {
		console.log(_id);
		Nannies.update(_id, { $set: {approved: false}}); 
	},

	'nannies.delete' : function (_id) {
		Nannies.remove(_id); 
	}

}); 

export const Nannies = new Mongo.Collection('nannies'); 
