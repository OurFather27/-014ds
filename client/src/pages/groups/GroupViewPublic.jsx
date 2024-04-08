import {useEffect, useState } from "react";
import {Link,useParams} from "react-router-dom"
import axios from "axios";
import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"

function EventView(){
	 const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	  const {_id}= useParams();
		const [groups, setgroups]=useState([])
	useEffect(()=>{
		axios.get('http://localhost:8800/api/groups/'+_id)
		.then(res => {
				console.log(res)

			setgroups(res.data)
		})
		.catch(err=> console.log(err));
	}, [_id])
	return(
		<>
		<Topbar/>
<div>
<div className="EventBoxView">
<div className="EventBox2View">
 <div className="EventBox3View">
 <img src={PF + groups.img}/>
<div className="Event_content">
<h3>{groups.group_description}</h3>
<p> friday night : february 07/10/2034</p>
</div>
</div>
 </div>
 </div>
 </div>

<div className="d-flex justify-content-center align-items-center">
	 	<div className="bg-white p-3 rounded w-25">
	 	<h2> Register</h2>
	 	<form >
	 		<div className="mb-3">
	 		<label htmlFor="email">
	 		<strong>Name</strong>
	 		</label>
	 		<input type="text"placeholder="Enter name"autoComplete="off"name="email"
	 		className="form-control rounded-0"/>

	 		</div>
	 		<div className="mb-3">
	 		<label htmlFor="email">
	 		<strong>Email</strong>
	 		</label>
	 		<input type="email"placeholder="Enter email"autoComplete="off"name="email"
	 		className="form-control rounded-0"/>
	 		
	 		</div>
	 		<div className="mb-3">
	 		<label htmlFor="email">
	 		<strong>password</strong>
	 		</label>
	 		<input type="password"placeholder="Enter password"autoComplete="off"name="password"
	 		className="form-control rounded-0"/>
	 		</div>
	 		<button type="submit"className="btn btn-success w-100 rounded-0">Register</button>
	 	</form>
	 	<p> Already Have an Account </p>
	 	<Link to="/login" className="btn btn-default border w-100 bg-light">Login
	 	</Link>
	 	</div>
	 	</div>
 <Footer/>
		</>
		)
}
export default EventView