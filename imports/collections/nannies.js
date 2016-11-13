import { Mongo } from 'meteor/mongo'; 
import { check, Match } from 'meteor/check'; 

Meteor.methods({

	'nannies.apply': function ({firstname, lastname, phone, street, citystate, zip}) {
		new SimpleSchema({
			firstname: { type: String, min: 1 }, 
			lastname: { type: String, min: 1 }, 
			phone: { type: String, min: 1 },  
			street: { type: String, min: 1}, 
			citystate: { type: String, min: 1}, 
			zip: { type: String, min: 1}, 
		}).validate( {firstname, lastname, phone, street, citystate, zip}); 
		// .validate should thow errors if fails

		return Nannies.insert({
			firstname: firstname, 
			lastname: lastname, 
			phone: phone,
			street: street, 
			citystate: citystate, 
			zip: zip, 
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
