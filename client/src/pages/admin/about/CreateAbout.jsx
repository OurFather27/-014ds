import React , {useState} from 'react'
import axios from "axios"
import {useHistory} from 'react-router-dom'
import Sidebar from "../../../components/sidebar/Sidebar"

function CreateAbout(){
        const [values, setValues]=useState({
        name:"",
        email:"",
        phone:""
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
   <label htmlFor="name">Name:</label>                    
   <input type="text" name='name' className='form-control'
   onChange={e=>  setValues({...values, name: e.target.value})}/>                
   </div>                
{/*   <div>                    
   <label htmlFor="email">Email:</label>                    
   <input type="email" name='email' className='form-control'                   
    onChange={e => setValues({...values, email: e.target.value})}/>
    </div>
    <div>                    
   <label htmlFor="email">phone:</label>                    
   <input type="phone" name='email' className='form-control'                   
    onChange={e => setValues({...values, phone: e.target.value})}/>
    
    </div><br />*/} 
    <button className='btn btn-info'>Submit</button>            
    </form>        
    </div>    
    </div>
</>
		)
}
export default CreateAbout