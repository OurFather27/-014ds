import {useEffect, useState } from "react";
import {Link,useParams} from "react-router-dom"
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar"

function EventView(){
	 const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	  const {_id}= useParams();
		const [events, setEvents]=useState([])
	useEffect(()=>{
		axios.get('http://localhost:8800/api/events/'+_id)
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
<div className="AdminEventBoxView">
<div className="AdminEventBox2View">
 <div className="AdminEventBox3View">
 <img src={PF + events.img}/>
<div className="AdminEvent_content">
<h3>{events.desc}</h3>
<p> friday night : february 07/10/2034</p>
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