import React , {useEffect, useState} from 'react'
import axios from "axios"
import {Link, useParams, useHistory } from 'react-router-dom'
import Sidebar from "../../../components/sidebar/Sidebar"
import './about.css'
function Update(){
		const {_id}= useParams();
		const [values, setValues]=useState({
		About_name:"",
		About_desc:""
	})
	const history = useHistory() 
	useEffect(()=>{
		axios.get(`https://014ds-qqbn.vercel.app/api/abouts/`+_id)
		.then(res => {
				console.log(res)

			setValues(res.data)
		})
		.catch(err=> console.log(err));
	}, [_id])

	const handleUpdate=(event)=>{
		event.preventDefault();
	    axios.put(`https://014ds-qqbn.vercel.app/api/abouts/`+_id, values)
		.then(res => {
			console.log(res)
			history.push('/admin/about')
		})
		.catch(err=> console.log(err));
	}



	return(
		<>
		<Sidebar/>
		<div className="AboutUpdate">
  <form onSubmit={handleUpdate} >                
  <div>                   
   <label htmlFor="name">About Name:</label>                    
   <input type="text" name='name' className='form-control'
   value={values.About_name} onChange={e=>  setValues({...values, About_name: e.target.value})}/>                
   </div>                
   <div>                    
   <label htmlFor="name">About Description:</label>                    
   <input type="text" name='name' className='form-control'                   
    value={values.About_desc} onChange={e=>  setValues({...values, About_desc: e.target.value})}/>
    </div>
    <button className='btn btn-info'>Update</button>
    <Link to="/admin/about"className="btn btn-primary ms-3">back</Link>            
    </form>        
    </div>		
    </>
    )
}
export default Update