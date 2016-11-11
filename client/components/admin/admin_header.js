import React from 'react'; 
import { Link } from 'react-router'; 

const AdminHeader = () => {
	return (
		<nav className="nav navbar-default admin-navbar">
			<div className="navbar-header">
				<Link to="/admin" className="navbar-brand">Admin</Link>
			</div>
			<ul className="nav navbar-nav">
				<li>
					<Link to="/admin/families">Families</Link>
				</li> 
				<li>
					<Link to="/admin/nannies">Nannies </Link>
				</li>
			</ul>
		</nav>
	); 
}; 

export default AdminHeader; 