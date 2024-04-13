import React , {useEffect,useRef, useState} from 'react'
import axios from "axios"
import {Link, useParams, useHistory } from 'react-router-dom'
import Sidebar from "../../../components/sidebar/Sidebar"
import './locationAdmin.css'
function EventUpdate(){
   const [file, setFile] = useState([]);
  const Location_name = useRef();
  const Location_Address = useRef();

      const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {_id}= useParams();
    const [values, setValues]=useState({
    Location_image:"",
    Location_name:"",
    Location_Address:""
  })
  const history = useHistory() 
  useEffect(()=>{
    axios.get('http://localhost:8800/api/locations/'+_id)
    .then(res => {
        console.log(res)

      setValues(res.data)
    })
    .catch(err=> console.log(err));
  }, [_id])


  const UpdateHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      Location_name: Location_name.current.value,
      Location_Address: Location_Address.current.value
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.Location_image = fileName;
      console.log(newPost);
      try {
        await axios.put("http://localhost:8800/api/upload/"+_id, data);
      } catch (err) {}
    }
 try {
      await axios.put("http://localhost:8800/api/locations/"+_id, newPost);
      history.push('/admin/location')
    } catch (err) {}
  };



  return(
    <>
        <Sidebar/>
         <div className="AdminEventUpdateBox">
          <form className="" onSubmit={UpdateHandler}>
<div className="AdminEventUpdateBoxImage">
<img src={values.Location_image?PF +values.Location_image: null}  width="480"/>                   
</div>
<div>
<label htmlFor="name">Event title:</label>                    
<input type="text" name='name' className='form-control'
value={values.Location_name} ref={Location_name}onChange={e=>  setValues({...values, Location_name: e.target.value})}/>                
</div> 
<label htmlFor="name">Event Description:</label>                    
<textarea type="text" name='name' className='form-control'
value={values.Location_Address} ref={Location_Address}
onChange={e=>  setValues({...values, Location_Address: e.target.value})}>
</textarea> 


<span className="shareOptionText">Change photos</span>
<input
type="file"
id="file"
src={PF+ values.Location_image}
accept=".png,.jpeg,.jpg"
onChange={(e) => setFile(e.target.files[0])}
/>
<button className="" type="submit">
Share
</button>
       </form>
     </div>
       

    </>
    )
}
export default EventUpdate