import Topbar from "../../components/topbar/Topbar"
import React , {useState, useEffect} from "react"
import {Link,useParams,useHistory} from 'react-router-dom' 
import axios from "axios"
import  "./about.css"
import Spiner from "../../components/Spiner/Spiner"

function About(){
	const navigate =  useHistory();
	const [data, setData]= useState([])
// Loading use state
																		const [showspin, setShowSpin] = useState(true);
																		useEffect(() => {
																		setTimeout(() => {
																		setShowSpin(false)
																		}, 800)
																		}, [])
																		// end Loading use state
	useEffect(()=>{
		axios.get('http://localhost:8800/api/abouts')
		.then(res => setData(res.data))
		.catch(err=> console.log(err));
	}, [])
	console.log(data)


	return(
<>
<Topbar/>
{/*Loading.....*/} {showspin ?  <Spiner /> :
<div className="container">
<div className="container-about">
<h2 className="">ABOUT</h2>
</div> 
			    {data.map((about)=>(
				<div className="ourMission">
				<h2>{about.About_name}</h2>
				<p>{about.About_desc}</p>

</div>
))}
</div>
}
</>

)
}
export default About