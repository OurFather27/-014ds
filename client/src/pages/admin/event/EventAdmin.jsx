import {useEffect, useState } from "react";
import {Link ,useHistory, useParams} from "react-router-dom"
import axios from "axios";
import './event.css'
import Sidebar from "../../../components/sidebar/Sidebar"

function AdminEvents() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
      const { _id}= useParams();

  const [events, setEvents] = useState([]);
  const history = (useHistory)
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:8800/api/events')
      setEvents(
        res.data.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1)
)
        };
        fetchEvents();
  }, []);

const handleDelete= (_id)=> {
const confirm=window.confirm("Would you like to Delete?")
if(confirm){
axios.delete('http://localhost:8800/api/events/'+_id)
.then(res =>{
window.location.reload(false);
}).catch(err=>console.log(err))
}
}
  return (
    <>

    <Sidebar/>
<div>
<div className="AdminEventBox">
<div className="AdminEventBox2">
<Link to="/admin/add-event" className="btn btn-sm btn-info me-2" >+Add New</Link>
<h1>Events</h1>
<p>when we have the AdminEvents comming Up</p>
        {events.slice(0, 2).map((p)=>(
<div className="AdminEventBox3">
 <div  className="">
 <Link  to={`/admin/event-view/${p._id}`}>
<img src={p.Event_image? PF + p.Event_image: null} width="48"/>
</Link>
<div className="AdminEvent_content">
<h3>{p?.Event_title}</h3>
<p>{p?.Event_date}</p>
</div>
</div>
 <Link to={`/admin/event-update/${p._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
  <button onClick={e => handleDelete(p._id)} className="btn btn-sm btn-danger">delete</button>
</div>


))}
</div>
</div>
</div>

</>
);
}
export default AdminEvents
