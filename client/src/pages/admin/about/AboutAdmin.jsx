import React , {useState, useEffect} from "react"
import {Link,useParams,useHistory} from 'react-router-dom' 
import axios from "axios"
import  "./about.css"
import Sidebar from "../../../components/sidebar/Sidebar"

function About(){
	const navigate =  useHistory();
	const [data, setData]= useState([])
	const {_id}= useParams();

	useEffect(()=>{
		axios.get('http://localhost:8800/api/abouts')
		.then(res => setData(res.data))
		.catch(err=> console.log(err));
	}, [])
	console.log(data)

const handleDelete= (_id)=> {
const confirm=window.confirm("Would you like to Delete?")
if(confirm){
axios.delete('http://localhost:8800/api/abouts/'+_id)
.then(res =>{
window.location.reload(false);
}).catch(err=>console.log(err))
}
}

	return(
<>
<Sidebar/>
<div className="containers">
<Link to="/createAbout"className="btn btn-success  ">Add New +</Link>
<Link to="/about" className="btn btn-info position-absolute top-5 start-50">View Public</Link>
<div className="container-about">
<h2 className="">ABOUT</h2>
</div> 
			    {data.map((d)=>(
				<div className="ourMission">
				<h2>Our Mission</h2>
				<p>{d.name}</p>
				<Link to={`/updateAbout/${d._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
				<button onClick={e => handleDelete(d._id)} className="btn btn-sm btn-danger danger-2">deleted</button>

</div>
))}
</div>
</>

)
}
export default About