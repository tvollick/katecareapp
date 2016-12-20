Meteor.methods({
	'users.newUser': function (userId, info) {
		if (info.profile.accounttype === 'nanny') {
			Meteor.call('nannies.newNanny', userId, info, (error) => {
				if (error)
					console.log(error); 
			}); 
		} else if (info.profile.accounttype === 'family') {
			console.log('family'); 
		} else {
			return 'error?'; 
		}
	}
}); 


var postSignUp = function (userId, info) { 

	// Meteor.call('notify.newNanny', userId, info, (error) => {
	// 	if (error) {
	// 		console.log('error'); 			
	// 	}
	// }); 

	Meteor.call('users.newUser', userId, info, (error) => {
		if (error)
			console.log(error); 
	}); 

	Roles.addUsersToRoles(userId, ['normal-user', info.profile.accounttype]); 
}; 



AccountsTemplates.configure({
	postSignUpHook: postSignUp 
}); 
