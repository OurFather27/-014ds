import {useEffect, useState } from "react";
import {Link,useParams} from "react-router-dom"
import axios from "axios";
import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import Spiner from "../../components/Spiner/Spiner"

function EventView(){
	 const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	  const {_id}= useParams();
		const [events, setEvents]=useState([])
		const [AllEvents, setAllEvents]=useState([])

																		// Loading use state
																		const [showspin, setShowSpin] = useState(true);
																		useEffect(() => {
																		setTimeout(() => {
																		setShowSpin(false)
																		}, 800)
																		}, [])
																		// end Loading use state
	useEffect(()=>{
		axios.get('http://localhost:8800/api/events/'+_id)
		.then(res => {
				console.log(res)

			setEvents(res.data)
		})
		.catch(err=> console.log(err));
	}, [_id])

// View or fetch all events lists
	  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:8800/api/events')
      setAllEvents(
        res.data.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1)
)
        };
        fetchEvents();
  }, []);
	return(
		<>
		<Topbar/>
		{/*Loading.....*/} {showspin ?  <Spiner /> :
<div>
<div className="EventBoxView">
<div className="EventBox2View">
<div className="EventBox3View">
<img src={PF + events.Event_image}/>
<div className="EventBoxView_content">
<h3> {events.Event_date}</h3>
<h1>{events.Event_title}</h1>
<p> {events.Event_desc}</p>

</div>
</div>
 </div>
 </div>
 </div>
}

{/* Event list*/}
<div className="AllEventBox">
<div className="AllEventBox2">
<h1>All list Events</h1>
        {AllEvents.slice(0, 10).map((p)=>(
          <a href={`/event-view/${p._id}`}>
<div className="AllEventBox3">
<img src={PF + p.Event_image} width="48"/>
<h2>{p.Event_title}</h2>
<h5>{p.Event_date}</h5>
</div>
</a>
))}
</div>
</div>


 <Footer/>
		</>
		)
}
export default EventView