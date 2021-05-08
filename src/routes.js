import { Router, Route, Link } from 'react-router';
import NavBar from './Components/navBar';

function RouterApp {
	return (
		<Router>
			<Route path="/" component={NavBar}>
			</Route>
		</Router>
	);
}

export default RouterApp;