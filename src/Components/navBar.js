import "./navBar.css";
import {Link} from 'react-router-dom';

function NavBar(props){
	const children = props.children;
	return (
		<div>
		<div className="NavBar">
			<Link to="/home">Home</Link>&emsp;&emsp;<Link to="/about">About</Link>
		</div>
		{ children }
		</div>
	);
}

export default NavBar;