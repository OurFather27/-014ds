import {useEffect, useState } from "react";
import {Link,useParams} from "react-router-dom"
import axios from "axios";
import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"

function GroupView(){
	 const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	  const {_id}= useParams();
		const [groups, setgroups]=useState([])
	useEffect(()=>{
		axios.get('https://014ds-2.onrender.com/api/groups/'+_id)
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
<div className="GroupBoxView">
<div className="GroupBox2View">
 <div className="GroupBox3View">
 <div className="GroupBox_Cover">
 <h1>{groups.group_description}</h1>
 <label>Get involved in Men’s Ministry where a group of men of all ages and 
 backgrounds get together, eat, hang out and have sermon-based discussion.
 </label>
 <br/>
 <br/>
 <Link className="Link"to="/groups">  Groups/   </Link> 
 <Link  className="Link"to="#">  {groups.group_description}</Link>
 </div>
 <img src={PF + groups.img}/>
 </div>

<div className="GroupBox_content2">
<h1 class="text">Welcome to Youth</h1>
<p> Whether you’re new to Northgate or you’ve been here a while, Men’s Ministry is a place to grow, 
learn and connect. Strengthen your relationship with God and other men through fun events and instructive studies. 
Sometimes we may go to a ballgame or even go out sailing. Whether you’re looking for a small group, a mentor, a Bible study, 
a chance to live generously with your talents or just an opportunity to play some basketball with the guys, Northgate’s Men’s Ministry has a variety of opportunities for you. We hope you’ll get plugged in where it fits you best. 
Watch the event calendar for upcoming events.</p>
</div>
 </div>
 </div>
</div>

<div className="GroupRegisterBox d-flex justify-content-center align-items-center">
	 	<div className="bg-white p-3 rounded w-25">
	 	<h2> Join Us {groups.group_description} Group </h2>
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
	 		<label htmlFor="phone">
	 		<strong>phone</strong>
	 		</label>
	 		<input type="phone"placeholder="Enter password"autoComplete="off"name="phone"
	 		className="form-control rounded-0"/>
	 		</div>
	 		<button type="submit"className="btn w-100 rounded-0">Join</button>
	 	</form>
	 	
	 	</div>
	 	</div>
 <Footer/>
		</>
		)
}
export default GroupView