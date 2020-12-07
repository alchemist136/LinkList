import React,{Component} from 'react';
import './my-account-chip.css';

class MyAccountChip extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<li class="nav-item dropdown">
			  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				 <img className="profile-photo" src="profile-photo.png" alt="Profile Img" class="img-thumbnail" />
				 Dropdown
			  </a>
			  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
				 <a class="dropdown-item" href="#">Action</a>
				 <a class="dropdown-item" href="#">Another action</a>
				 <div class="dropdown-divider"></div>
				 <a class="dropdown-item" href="#">Something else here</a>
			  </div>
			</li>
		)
	}
	
}

export default MyAccountChip;