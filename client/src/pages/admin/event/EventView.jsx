import {useEffect, useState } from "react";
import {Link,useParams} from "react-router-dom"
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar"

function EventView(){
	 const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	  const {Event_id}= useParams();
		const [events, setEvents]=useState([])
	useEffect(()=>{
		axios.get('http://localhost:8800/api/events/'+Event_id)
		.then(res => {
				console.log(res)

			setEvents(res.data)
		})
		.catch(err=> console.log(err));
	}, [Event_id])
	return(
		<>
<Sidebar/>
<div>
<div className="AdminEventBoxView">
<div className="AdminEventBox2View">
 <div className="AdminEventBox3View">
 <img src={PF + events.Event_image}/>
<div className="AdminEvent_content">
<h3>{events.Event_title}</h3>
<p> {events.Event_desc}</p>
<p> {events.Event_date}</p>
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
export default EventView