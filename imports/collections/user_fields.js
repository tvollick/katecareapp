import { Mongo } from 'meteor/mongo'; 
import { check, Match } from 'meteor/check'; 
Meteor.methods({
	'field.create' : function (userId, slug) { 
		// new SimpleSchema({
		// 	userId: {type: String, min: 1}, 
		// 	slug: {type: String, min: 1} 
		// }).validate({userId, slug });

		return UserFields.insert({
			userId: userId, 
			slug: slug, 
			value: ''
		}); 

	}, 
	'field.deleteAll': function () {
		return UserFields.remove({}); 
	}, 
	'field.update': function (_id, newValue) {
		return UserFields.update(_id, {
			$set: { value: newValue}
		}); 
	}
}); 

export const UserFields = new Mongo.Collection('userFields'); 