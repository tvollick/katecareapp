import React from 'react'; 
import { Link } from 'react-router'; 

const Header = () => {
	return (
		<nav className="nav navbar-default">
			<div className="navbar-header">
				<Link to="/" className="navbar-brand">Kate Care </Link>
			</div>
			<ul className="nav navbar-nav">
				<li>
					<Link to="/parents">For Parents </Link>
				</li>
				<li>
					<Link to="/nannies">For Nannies </Link> 
				</li>
			</ul>
		</nav>
	); 
}; 

export default Header; 