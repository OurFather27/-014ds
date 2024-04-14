import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import Spiner from "../../components/Spiner/Spiner"

import {useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import './group.css'

function Groups() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [Groups, setGroups] = useState([]);

                                    // Loading use state
                                    const [showspin, setShowSpin] = useState(true);
                                    useEffect(() => {
                                    setTimeout(() => {
                                    setShowSpin(false)
                                    }, 800)
                                    }, [])
                                    // end Loading use state
  useEffect(() => {
    const fetchGroups = async () => {
      const res = await axios.get('https://014ds-2.onrender.com/api/groups')
      setGroups(
        res.data.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1)
)
        };
        fetchGroups();
  }, []);
  return (
    <>
    <Topbar/>
        {/*Loading.....*/} {showspin ?  <Spiner /> :

<div>
<div className="GroupBox">
<div className="GroupBox2">
<h1>Groups</h1>
<p>groups details and more things</p>
        {Groups.map((p)=>(
<Link className="GroupBox2Link" to={`/group-view/${p._id}`}>
<div className="GroupBox3">
<img src={PF + p.img} width="48"/>
<div className="Group_content">
<h3>{p.group_description}</h3>
<p> friday night : february 07/10/2034</p>
</div>
</div>
</Link>

))}
</div>
</div>
</div>
}
<Footer/>
</>
);
}
export default Groups
