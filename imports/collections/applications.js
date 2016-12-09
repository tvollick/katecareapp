import { Mongo } from 'meteor/mongo'; 
import { check, Match } from 'meteor/check'; 

Meteor.methods({
	'application.create' : function (slug) { 
		return Applications.insert({
			userId: this.userId, 
			slug: slug , 
			fields: [], 
			status: false
		}); 
	}, 
	'application.deleteAll' : function () { 
		return Applications.remove({}); 
	}, 
	'application.fieldChange': function (fieldSlug, appSlug, isEmpty) {
		var app = Applications.findOne({slug: appSlug, userId: this.userId});
		var changed = false;

		for (var i = 0; i < app.fields.length; i++) { 
			if (app.fields[i].slug === fieldSlug) {
				console.log('found match'); 
				changed = true; 
				const tempFields = app.fields;

				tempFields[i].isEmpty = isEmpty;

				// need to change this record i

				return Applications.update(app._id, {
					$set: {fields: tempFields }
				})
			}
		} 

		if (!changed) { 
			// field doesn't exist in app fields[]. 
			const tempFields = app.fields; 
			tempFields.push({slug: fieldSlug, isEmpty: isEmpty}); 

			return Applications.update(app._id, { 
				$set: {fields: tempFields }
			}); 
		}

	}
}); 

export const Applications = new Mongo.Collection('applications'); 