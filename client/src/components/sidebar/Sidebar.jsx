import './sidebar.css'
import {Link} from "react-router-dom"

function Sidebar(){
	return(
		<>

		<div className="Sidebar">
		<div className="Sidebar2">
		<h2>Newtestment Church</h2>
<div className="Sidebar3">
<div className="headling">
Dashboard 
</div>
<hr/>
<div className="headling">
Custom 
</div>
<hr/>

<div className="collaps">
<a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="headling">
Page Layout </a>
</div>

<div className="ListCollapsMenu collapse list-unstyled" id="pageSubmenu">

<Link to="/admin/about">
<li>About</li>
</Link>
<Link to="/admin/event">
<li>Event</li>
</Link>
<Link to="/admin/groups">
<li>Groups</li>
</Link>
<Link to="/admin/about">
<li>signu</li>
</Link>
</div>
<hr/>
<div className="collaps">
<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="headling">
Application </a>
</div>
<div className="ListCollapsMenu collapse list-unstyled" id="homeSubmenu">
<Link to="/admin/users">
<li>Users</li>
</Link>
</div>
<hr/>
<div className="headling">
Custom 
</div>
<hr/>
<Link to="/">Veiw Web</Link>
<hr/>

</div>
</div>
</div>
</>
		)
}
export default Sidebar