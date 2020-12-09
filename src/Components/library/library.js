import React,{Component} from 'react';
import './library.css';

class Library extends Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		var lib = document.getElementById(this.props.id);
		lib.style.backgroundColor = this.props.color;
	}
	
	render() {
		return(
			<div class="card text-white mb-3 lib-card" id={this.props.id}>
			  <div class="card-header"><h7>by {this.props.author}</h7></div>
			  <div class="card-body">
				 <h5 class="card-title">{this.props.libName}</h5>
				 <p class="card-text">Created on {this.props.dateCreated}</p>
				 <p class="card-text">Links count {this.props.linksCount}</p> 
			  </div>
			</div>
		)
	}
}

export default Library;