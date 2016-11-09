import React from 'react'; 

import Header from './header'; 

export default (props) => {
	return (
		<div className="app-main">
			<Header /> 
			{props.children}
		</div>
	); 
}; 