import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './Components/navBar';

function RouterApp(props) {
	return (
		<Router>
			<Route path="/" component={NavBar}>
			</Route>
		</Router>
	);
}

export default RouterApp;