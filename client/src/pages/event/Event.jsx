import {useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import './event.css'
function Events() {
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
  return (
    <>
<div>

<div className="EventBox">
<div className="EventBox2">
<h1>Events</h1>
<h4>when we have the Events comming Up</h4>
        {events.slice(0, 2).map((p)=>(
          <Link to={`/event-view/${p._id}`}>
<div className="EventBox3">
<img src={PF + p.Event_image} width="48"/>
<div className="Event_content">
<h3>{p.Event_title}</h3>
<p>{p.Event_date}</p>
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
export default Events
