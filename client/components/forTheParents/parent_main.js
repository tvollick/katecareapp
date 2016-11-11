import React, {Component} from 'react'; 
import ParentApplication from './parent_application'; 

class ParentPage extends Component {
	render () {
		return (
			<div className="container">
				<h2> For The Parents </h2> 
				<div className="dummy-content"></div>
				<ParentApplication /> 
			</div>
		); 
	}
}

export default ParentPage; 