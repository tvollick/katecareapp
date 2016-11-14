

var postSignUp = function (userId, info) { 

	Meteor.call('notify.newNanny', userId, info, (error) => {
		if (error) {
			console.log('error'); 			
		}
	}); 

	Roles.addUsersToRoles(userId, ['normal-user', info.profile.accounttype]); 
}; 

AccountsTemplates.configure({
	postSignUpHook: postSignUp
}); 