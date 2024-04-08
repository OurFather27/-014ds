import {useEffect, useState } from "react";
import {Link,useParams} from "react-router-dom"
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar"

function UsersView(){
	 const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	  const {_id}= useParams();
		const [events, setEvents]=useState([])
	useEffect(()=>{
		axios.get('http://localhost:8800/api/auth/'+_id)
		.then(res => {
				console.log(res)

			setEvents(res.data)
		})
		.catch(err=> console.log(err));
	}, [_id])
	return(
		<>
<Sidebar/>
<div>
<div className="AdminUserBoxView">
<div className="AdminUserBox2View">
 <div className="AdminUserBox3View">
<div className="AdminUser_content">
<h3>{events.name}</h3>
<h3>{events.email}</h3>
</div>
</div>
 </div>
 </div>
 </div>
 <br/>
 <br/>
		</>
		)
}
export default UsersView