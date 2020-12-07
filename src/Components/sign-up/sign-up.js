import React, {Component} from 'react';
import './sign-up.css'

class SignUp extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="container">
						  <div className="card sign-up-card">
								<div className="card-body">
									 <h2>Create Account</h2>
									 <form className="sign-up-form">
										 <div className="row">
											  <div className="form-group col-sm-6">
												 <input type="text" className="form-control" id="sign-up-firstname" placeholder="First Name"></input>
											  </div>
											  <div className="form-group col-sm-6">
												 <input type="text" className="form-control" id="sign-up-surname" placeholder="Surname"></input>
											  </div>
										 </div>
										 <div className="form-group">
											 <input type="email" className="form-control" id="sign-up-email" aria-describedby="emailHelp" placeholder="Email"></input>
										 </div>
										 <div class="form-group">
											 <input type="password" className="form-control" id="sign-up-password" placeholder="Password"></input>
										 </div>
										 <div class="form-group">
											 <input type="password" className="form-control" id="sign-up-cnf-password" placeholder="Confirm Password"></input>
										 </div>
										 <button type="submit" class="btn btn-block sign-up-btn">Sign Up</button>
									 </form>
									 <p>Already Have an Account?  <a href="#">Log In</a></p>
								</div>
						  </div> 
            </div>
        )
    }  
}

export default SignUp;