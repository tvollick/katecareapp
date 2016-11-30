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
	}
}); 

export const Applications = new Mongo.Collection('applications'); 