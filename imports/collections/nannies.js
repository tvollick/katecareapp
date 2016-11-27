import { Mongo } from 'meteor/mongo'; 
import { check, Match } from 'meteor/check'; 

Meteor.methods({

	'nannies.apply': function (userId,{firstname, lastname, phone, street, citystate, zip, isLegal, isLegalExplanation, availability, position, liveInOut, hasAllergies, hasAllergiesDetails, desiredSalary}) {
		new SimpleSchema({
			userId: {type: String, min: 1},
			firstname: { type: String, min: 1 }, 
			lastname: { type: String, min: 1 }, 
			phone: { type: String, min: 1 },  
			street: { type: String, min: 1}, 
			citystate: { type: String, min: 1}, 
			zip: { type: String, min: 1}, 
			isLegal: { type: Boolean}, 
			isLegalExplanation: {type: String, min: 1}, 
			availability: {type: String, min: 1}, 
			position: {type: String, min: 1}, 
			liveInOut: { type: String, min: 1}, 
			hasAllergies: {type: String, min: 1}, 
			hasAllergiesDetails: {type: String},  // no min? optional
			desiredSalary: {type: String, min: 1}
		}).validate( {userId, firstname, lastname, phone, street, citystate, zip, isLegal, isLegalExplanation, availability, position, liveInOut, hasAllergies, hasAllergiesDetails, desiredSalary}); 
		// .validate should thow errors if fails

		return Nannies.insert({
			userId: userId, 
			appData: {
				firstname: firstname, 
				lastname: lastname, 
				phone: phone,
				street: street, 
				citystate: citystate, 
				zip: zip, 
				isLegal: isLegal, 
				isLegalExplanation: isLegalExplanation, 
				availability: availability,
				approved: false, 
				position: position, 
				liveInOut: liveInOut, 
				hasAllergies: hasAllergies, 
				hasAllergiesDetails: hasAllergiesDetails, 
				desiredSalary: desiredSalar
			}
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
