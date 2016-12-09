import { Mongo } from 'meteor/mongo'; 
import { check, Match } from 'meteor/check'; 
Meteor.methods({
	'field.create' : function (userId, slug, label, init, required, appSlug) { 
		// new SimpleSchema({
		// 	userId: {type: String, min: 1}, 
		// 	slug: {type: String, min: 1} 
		// }).validate({userId, slug });

		return UserFields.insert({
			userId: userId, 
			slug: slug, 
			value: init, 
			label: label, 
			required: (required ? required : false), 
			isEmpty: true, 
			appSlug: appSlug
		}); 

	}, 
	'field.deleteAll': function () {
		return UserFields.remove({}); 
	}, 
	'field.update': function (_id, newValue) {

		var field = UserFields.findOne(_id); 
		// if new value isEmpty state is different than on file
		var isEmpty = false; 
		if (newValue === '')
			isEmpty = true;
		if (isEmpty !== field.isEmpty) {
			// call meteor method to update application status? 
			// application.fieldChange
			Meteor.call('application.fieldChange',field.slug, field.appSlug, isEmpty, (error) => {
				if (error) {
					console.log(error); 
				}
			}); 
		}

		return UserFields.update(_id, {
			$set: { value: newValue, isEmpty: isEmpty}
		}); 
	}
}); 

export const UserFields = new Mongo.Collection('userFields'); 