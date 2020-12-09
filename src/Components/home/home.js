import React,{Component} from 'react';
import './home.css';


import Navbar from '../nav-bar/nav-bar.js';
import SidePanel from '../side-panel/side-panel.js';
import Library from '../library/library.js';


class Home extends Component {
	
	constructor(props) {
		super(props);
	}
	
	loadLibraries = () => {
		var list = [];
		for(var i=0;i<3;i++) {
			var temp = [];
			for(var j=0;j<3;j++) {
				temp.push(<div className="col-sm-4"><Library libName="My Lib" dateCreated="3/12/2020" linksCount="10" id={i.toString()+j.toString()} color="#fff" author="ANKAN MALLICK" /></div>);
			}
			list.push(<div className="row">{temp}</div>);
		}
		return list;
	}
	
	render() {
		return(
			<div>
				<Navbar />
				<div className="row home-body">
					<div className="col-sm-3">
						<SidePanel />
					</div>
					<div className="col-sm-9 lib-list">
						{this.loadLibraries()}
					</div>
				</div>
			</div>
		)
	}
	
}

export default Home;