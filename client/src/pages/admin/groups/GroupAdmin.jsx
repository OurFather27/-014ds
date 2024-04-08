import Sidebar from "../../../components/sidebar/Sidebar"
import {useEffect, useState } from "react";
import AddGroup from "./AddGroup";
import axios from "axios";
import {Link, useParams} from "react-router-dom"
import './groupAdmin.css'
function Groups() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [Groups, setGroups] = useState([]);
  const [data, setData]= useState([])
  const {_id}= useParams();
  useEffect(() => {
    const fetchGroups = async () => {
      const res = await axios.get('http://localhost:8800/api/groups')
      setGroups(
        res.data.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1)
)
        };
        fetchGroups();
  }, []);
const handleDelete= (_id)=> {
const confirm=window.confirm("Would you like to Delete?")
if(confirm){
axios.delete('http://localhost:8800/api/groups/'+_id)
.then(res =>{
window.location.reload(false);
}).catch(err=>console.log(err))
}
}
  return (
    <>
<Sidebar/>
<div>
<div className="admin_GroupBox">
<div className="admin_GroupBox2">
<h1>Groups
</h1>
<Link to="/admin/add-group" className="btn btn-sm btn-info me-2" >+Add New</Link>
<p>groups details and more things</p>
        {Groups.map((p)=>(      
<div className="admin_GroupBox3">
<img src={PF + p.img} width="48"/>
<div className="admin_Group_content">
<h3>{p.group_description}</h3>
<p> friday night : february 07/10/2034</p>
        <Link to={`/groupupdate/${p._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
        <button onClick={e => handleDelete(p._id)} className="btn btn-sm btn-danger">delete</button>

</div>
</div>

))}
</div>
</div>
</div>
</>
);
}
export default Groups

