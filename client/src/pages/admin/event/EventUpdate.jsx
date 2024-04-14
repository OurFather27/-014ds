import React , {useEffect,useRef, useState} from 'react'
import axios from "axios"
import {Link, useParams, useHistory } from 'react-router-dom'
import Sidebar from "../../../components/sidebar/Sidebar"
import './event.css'
function EventUpdate(){
	 const [file, setFile] = useState([]);
  const Event_title = useRef();
  const Event_desc = useRef();
  const Event_date = useRef();

	    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
		const {_id}= useParams();
		const [values, setValues]=useState({
		Event_image:"",
		Event_title:"",
    Event_desc:"",
    Event_date:""
	})
	const history = useHistory() 
	useEffect(()=>{
		axios.get('https://014ds-2.onrender.com/api/events/'+_id)
		.then(res => {
				console.log(res)

			setValues(res.data)
		})
		.catch(err=> console.log(err));
	}, [_id])


  const UpdateHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      Event_title: Event_title.current.value,
      Event_desc: Event_desc.current.value,
      Event_date: Event_date.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.Event_image = fileName;
      console.log(newPost);
      try {
        await axios.put("https://014ds-2.onrender.com/api/upload/"+_id, data);
      } catch (err) {}
    }
 try {
      await axios.put("https://014ds-2.onrender.com/api/events/"+_id, newPost);
      history.push('/admin/event')
    } catch (err) {}
  };



	return(
		<>
        <Sidebar/>
         <div className="AdminEventUpdateBox">
          <form className="" onSubmit={UpdateHandler}>
<div className="AdminEventUpdateBoxImage">
<img src={values.Event_image?PF +values.Event_image: null}  width="480"/>                   
</div>
<div>
<label htmlFor="name">Event title:</label>                    
<input type="text" name='name' className='form-control'
value={values.Event_title} ref={Event_title}onChange={e=>  setValues({...values, Event_title: e.target.value})}/>                
</div> 
<label htmlFor="name">Event Description:</label>                    
<textarea type="text" name='name' className='form-control'
value={values.Event_desc} ref={Event_desc}
onChange={e=>  setValues({...values, Event_desc: e.target.value})}>
</textarea> 
<div>
<label htmlFor="name">Event date:</label>                    
<input type="text" name='name' className='form-control'
value={values.Event_date} ref={Event_date}onChange={e=>  setValues({...values, Event_date: e.target.value})}/>                
</div> 

<span className="shareOptionText">Change photos</span>
<input
type="file"
id="file"
src={PF+ values.Event_image}
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