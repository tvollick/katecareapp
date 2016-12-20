import React, {Component} from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import NannyApplication from './nanny_application'; 
import { Link, browserHistory } from 'react-router'; 

import DisplayCard from './profile_comps/display_card'; 
import DisplayReference from './profile_comps/display_reference'; 

// really should change this module name to NannyApplication or something
import {Nannies} from '../../../../imports/collections/nannies'; 

class NannyDashboard extends Component { 

	renderDashboard () {
		if (this.props.hasLoaded && this.props.userData.length)  { 
			console.log('has loaded'); 
			const user = this.props.userData[0]; 
				
			if (!user.forms.personalInfo.isComplete) {
				console.log('go to personal info'); 
				browserHistory.push('/account/nanny-application'); 
			} else if (!user.forms.resume.isComplete) { 
				console.log('go to resume'); 
				browserHistory.push('/account/nanny-resume-form'); 
			} else if (!user.forms.references.isComplete) { 
				console.log('go to references');
				browserHistory.push('/account/nanny-references');  
			} else {
				return (
					<div>
						<DisplayCard 
							fields={user.forms.personalInfo.fields} 
							label="Bio"
							editLink="/account/nanny-application"
						/>
						<DisplayCard
							fields={user.forms.resume.fields}
							label="Work History"
							editLink="/account/nanny-resume-form"
						/>
						<div className="card card-block">
							<h2> References </h2>
							{this.renderReferences(user.forms.references.referenceArr)}
							<Link 
								to="account/nanny-reference"
								className="btn btn-warning"
							>
								Edit References
							</Link>
						</div>
					</div>
				); 
			}
		}		
	}

	renderReferences(references){
		return	references.map((reference, i) => { 
			return (
				<DisplayReference
					key={"reference-key-"+i}
					reference={reference}
					index={i}
				/>
			); 
		}); 
	 
	}

	render () { 
		return (
			<div>
				{this.renderDashboard()}
			</div>
		)
	}

}

export default createContainer((props) => {
	const handle = Meteor.subscribe('nannyProfile'); 
	const hasLoaded = handle.ready(); 
	const userData = Nannies.find({}).fetch(); 
	return { 
		userData, 
		hasLoaded
	}; 
}, NannyDashboard); 


