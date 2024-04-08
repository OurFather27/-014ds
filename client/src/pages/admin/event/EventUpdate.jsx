import React , {useEffect,useRef, useState} from 'react'
import axios from "axios"
import {Link, useParams, useHistory } from 'react-router-dom'
import Sidebar from "../../../components/sidebar/Sidebar"
import './event.css'
function EventUpdate(){
	  const [file, setFile] = useState([]);
  const desc = useRef();

	    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
		const {_id}= useParams();
		const [values, setValues]=useState({
		img:"",
		desc:""
	})
	const history = useHistory() 
	useEffect(()=>{
		axios.get('http://localhost:8800/api/events/'+_id)
		.then(res => {
				console.log(res)

			setValues(res.data)
		})
		.catch(err=> console.log(err));
	}, [_id])


  const UpdateHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.put("http://localhost:8800/api/upload/"+_id, data);
      } catch (err) {}
    }
 try {
      await axios.put("http://localhost:8800/api/events/"+_id, newPost);
      history.push('/admin/event')
    } catch (err) {}
  };



	return(
		<>
        <Sidebar/>
         <div className="AdminEventUpdateBox">
          <form className="" onSubmit={UpdateHandler}>
          <div className="AdminEventUpdateBoxImage">
           <img src={PF +values.img}  width="480"/>                   
           </div>
           <div>
            <label htmlFor="name">Group Name:</label>                    
            <input type="text" name='name' className='form-control'
            value={values.desc} ref={desc}onChange={e=>  setValues({...values, desc: e.target.value})}/>                
          </div> 

          <label htmlFor="name">Group Description:</label>                    
          <textarea class="form-control" aria-label="With textarea"></textarea> 
          <span className="shareOptionText">Change photos</span>
          <input
          type="file"
          id="file"
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