import React , {useEffect, useState} from 'react'
import axios from "axios"
import {Link, useParams, useHistory } from 'react-router-dom'
import Sidebar from "../../../components/sidebar/Sidebar"
import './about.css'
function Update(){
		const {_id}= useParams();
		const [values, setValues]=useState({
		name:"",
		email:"",
		phone:""
	})
	const history = useHistory() 
	useEffect(()=>{
		axios.get('http://localhost:8800/api/abouts/'+_id)
		.then(res => {
				console.log(res)

			setValues(res.data)
		})
		.catch(err=> console.log(err));
	}, [_id])

	const handleUpdate=(event)=>{
		event.preventDefault();
	    axios.put('http://localhost:8800/api/abouts/'+_id, values)
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
   <label htmlFor="name">Name:</label>                    
   <input type="text" name='name' className='form-control'
   value={values.name} onChange={e=>  setValues({...values, name: e.target.value})}/>                
   </div>                
   <div>                    
   <label htmlFor="email">Email:</label>                    
   <input type="email" name='email' className='form-control'                   
    value={values.email} onChange={e=>  setValues({...values, email: e.target.value})}/>
    </div>
    <div>                    
   <label htmlFor="email">phone:</label>                    
   <input type="phone" name='phone' className='form-control'                   
    value={values.phone} onChange={e=>  setValues({...values, phone: e.target.value})}/>
    
    </div><br /> 
    <button className='btn btn-info'>Update</button>
    <Link to="/admin/about"className="btn btn-primary ms-3">back</Link>            
    </form>        
    </div>		
    </>
    )
}
export default Update