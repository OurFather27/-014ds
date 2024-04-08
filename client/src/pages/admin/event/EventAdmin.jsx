import {useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import './event.css'
import Sidebar from "../../../components/sidebar/Sidebar"

function AdminEvents() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [events, setEvents] = useState([]);

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
<h1>Events</h1>
<p>when we have the AdminEvents comming Up</p>
        {events.slice(0, 2).map((p)=>(
<Link to={`/admin/eventview/${p._id}`}>
<div className="AdminEventBox3">
<img src={PF + p.img} width="48"/>
<div className="AdminEvent_content">
<h3>{p.desc}</h3>
<p> friday night : february 07/10/2034</p>
        <Link to={`/admin/eventupdate/${p._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
        <button onClick={e => handleDelete(p._id)} className="btn btn-sm btn-info danger-2">delete</button>
</div>
</div>
</Link>


))}
</div>
</div>
</div>

</>
);
}
export default AdminEvents
