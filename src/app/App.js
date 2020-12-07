import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import SignUp from '../Components/sign-up/sign-up.js';
import Home from '../Components/home/home.js';

function App() {
  return (
	  <Router>
                <Switch>
						  <Route path='/' exact component={Home} />
                    <Route path='/sign-up' component={SignUp} />
                </Switch>
     </Router>
  );
}

export default App;
