import React,{Component} from 'react';
import './side-panel.css';

class SidePanel extends Component {
	
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div className="side-panel fixed-top">
				<button type="button" className="btn btn-info btn-lg add-lib-btn">New Library</button>
				<div className="side-panel-list">
					<div class="list-group">
					  <a href="#" class="list-group-item list-group-item-action list-group-item-light">My Libraries</a>
					  <a href="#" class="list-group-item list-group-item-action list-group-item-light">Shared With Me</a>
					  <a href="#" class="list-group-item list-group-item-action list-group-item-light">Starred</a>
					</div>
				</div>
			</div>
		)
	}
}

export default SidePanel;