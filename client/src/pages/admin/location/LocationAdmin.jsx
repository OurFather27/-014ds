import "./locationAdmin.css"
import Sidebar from "../../../components/sidebar/Sidebar"
import Helmet from 'react-helmet';
import LoadingIcons from 'react-loading-icons'
import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Spiner from "../../../components/Spiner/Spiner"

function Location() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [Location, setLocation] = useState([]);
  useEffect(() => {
    const fetchLocation = async () => {
      const res = await axios.get('https://014ds-2.onrender.com/api/locations')
      setLocation(
        res.data.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1)
          )
        };
        fetchLocation();
  }, []);
  const handleDelete= (_id)=> {
const confirm=window.confirm("Would you like to Delete?")
if(confirm){
axios.delete('https://014ds-2.onrender.com/api/locations/'+_id)
.then(res =>{
window.location.reload(false);
}).catch(err=>console.log(err))
}
}
  return (
<>
<Sidebar/>
<div className="AdminLocation">
<Link to="/admin/add-location"><h3>+ Add Location</h3></Link>
<div className="AdminLocation2">
{Location.map((location)=>(
<div className="AdminLocation_container">
<h4>{location.Location_name}</h4><br/>
<p>{location.Location_Address}</p>
<Link to={`/admin/location-view/${location._id}`}><h3>View Direction</h3></Link>

        <Link to={`/admin/location-update/${location._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
        <button onClick={e => handleDelete(location._id)}  className="btn btn-sm btn-danger">delete</button>
</div>
))} 
</div>
</div>
}

</>
);
}

export default Location