import React , {useEffect, useState} from 'react'
import axios from "axios"
import {Link, useParams, useHistory } from 'react-router-dom'
import Sidebar from "../../../components/sidebar/Sidebar"
import swal from 'sweetalert';


function Update(){
    const {_id}= useParams();
    const [values, setValues]=useState({
    name:"",
    email:""
  })
  const history = useHistory() 
  useEffect(()=>{
    axios.get('http://localhost:8800/api/auth/'+_id)
    .then(res => {
        console.log(res)

      setValues(res.data)
    })
    .catch(err=> console.log(err));
  }, [_id])

  const handleUpdate=(event)=>{
    event.preventDefault();
      axios.put('http://localhost:8800/api/auth/'+_id, values)
    .then(res => {
     
     swal({
          title: "Successfuly Updated!",
          text: "You clicked the button!",
          icon: "success",
          button: "Ok!",
          })

     .then(res=>{
      history.push('/admin/users')
    }) 
  
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

    <button className='btn btn-info'>Update</button>
    <Link to="/admin/about"className="btn btn-primary ms-3">back</Link>            
    </form>        
    </div>    
    </>
    )
}
export default Update