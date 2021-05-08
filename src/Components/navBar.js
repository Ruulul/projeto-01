import "./navBar.css";

function NavBar(props){
	const children = props.children;
	return (
		<div>
		<div className="NavBar">
			NavBar ;P
		</div>
		{ props.children }
		</div>
	);
}

export default NavBar;