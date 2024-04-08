import {useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar"
import "./users.css"
function User(){
		const [events, setEvents]=useState([])
	useEffect(()=>{
		axios.get('http://localhost:8800/api/auth')
		.then(res => {
				console.log(res)

			setEvents(res.data)
		})
		.catch(err=> console.log(err));
	}, [])
	return(
		<>
		<Sidebar/>
		<div className="UserBox">
		<div className="UserBox2">
			<div className="UserBox3">
<div class="table-responsive">
  	<table class="table table-bordered  table-sm">					
<thead class="table-dark table-bordered border-light">
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>password</th>
        <th>Action</th>

      </tr>
</thead>
				{
					events.map((p)=>(
	<tbody>
      <tr>
        <td>{p.name}</td>
         <td>{p.name}</td>
        <td>{p.email}</td>
        <td>{p.password}</td>
        		<Link to={`/admin/users-update/${p._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
        		<Link to={`/admin/users-view/${p._id}`} className="btn btn-sm btn-info me-2">View</Link>
				<button  className="btn btn-sm btn-danger ">deleted</button>

      </tr>
    </tbody>
					))}

</table>
 </div>	


			</div>
		</div>
		</div>
		</>
		)
}
export default User