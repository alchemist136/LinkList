import React,{Component} from 'react';
import './nav-bar.css';

import MyAccountChip from '../my-account-chip/my-account-chip.js';
import ProfilePhoto from './profile-photo.jpg';

class NavBar extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<nav className="navbar row my-navbar fixed-top">
				<div className="col-sm-2">
					<a class="navbar-brand logo" href="#">LinkList</a>
				</div>
				<div className="col-sm-8">
					<form className="row">
						<div className="col-sm-9">
							<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
						</div>
						<div className="col-sm-3">
							<button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
						</div>
					</form>
				</div>
				<div className="col-sm-2">
					<a href="#"><img className="profile-photo" src={ProfilePhoto} /></a>
				</div>
			</nav>
		)
	}
	
}

export default NavBar;