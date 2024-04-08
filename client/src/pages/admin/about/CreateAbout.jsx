import React , {useState} from 'react'
import axios from "axios"
import {useHistory} from 'react-router-dom'
import Sidebar from "../../../components/sidebar/Sidebar"

function CreateAbout(){
        const [values, setValues]=useState({
        About_name:"",
        About_desc:""
    })
    const history = useHistory();
    const handlesubmit = (event)=>{
        event.preventDefault(); 
        axios.post('http://localhost:8800/api/abouts', values)
        .then(res => {
            console.log(res)
            history.push('/admin/about')
        })
        .catch(err=> console.log(err));

    }
	return(
		<>
                <Sidebar/>

  <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>        
  <div className='w-50 border bg-secondary text-white p-5'>            
  <form onSubmit={handlesubmit}>                
  <div>                   
   <label htmlFor="name">About Name:</label>                    
   <input type="text" name='name' className='form-control'
   onChange={e=>  setValues({...values, About_name: e.target.value})}/>                
   </div>                
   <div>                    
   <label htmlFor="name">About Description:</label>                    
   <input type="name" name='email' className='form-control'                   
    onChange={e => setValues({...values, About_desc: e.target.value})}/>
    </div>
    <button className='btn btn-info'>Submit</button>            
    </form>        
    </div>    
    </div>
</>
		)
}
export default CreateAbout