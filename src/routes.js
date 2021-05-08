import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './Components/navBar';
import Home from './Pages/Home';
import About from './Pages/About';

function RouterApp(props) {
	return (
		<Router>
			<div>
				<NavBar>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/home" component={Home}/>
						<Route path="/about" component={About}/>
					</Switch>
				</NavBar>
			</div>
		</Router>
	);
}

export default RouterApp;