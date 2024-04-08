import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, useHistory} from "react-router-dom"
import axios from 'axios'

function Login(){
	const [email,setEmail] = useState()
	const [password,setPassword] = useState()
	const history = useHistory()
axios.defaults.withCredentials = true;
const handleSubmit =(e)=>{
	e.preventDefault()
	axios.post('http://localhost:8800/api/auth/login',{email, password})
	.then(res=> {
		if(res.data.Status === "success"){
			if(res.data.role === "admin"){
				history.push('/admin/dashboard')
			}else if(res.data.role != "admin")
				history.push('/')
		}else{
			alert("please input correct password or email")
		}
	}).catch(err=>console.log(err))
}
	return(
		<>
			<div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
	 	<div className="bg-white p-3 rounded w-25">
	 	<h2> Login</h2>
	 	<form onSubmit={handleSubmit}>

	 		<div className="mb-3">
	 		<label htmlFor="email">
	 		<strong>Email</strong>
	 		</label>
	 		<input type="email"placeholder="Enter email"autoComplete="off"name="email"
	 		className="form-control rounded-0"onChange={(e)=>setEmail(e.target.value)}/>
	 		
	 		</div>
	 		<div className="mb-3">
	 		<label htmlFor="email">
	 		<strong>password</strong>
	 		</label>
	 		<input type="password"placeholder="Enter password"autoComplete="off"name="password"
	 		className="form-control rounded-0"onChange={(e)=>setPassword(e.target.value)}/>
	 		</div>
	 		<button type="submit"className="btn btn-success w-100 rounded-0">Register</button>
	 	</form>
	 	<p> Don't Have an Account? </p>
	 	<Link to="/signup" className="btn btn-default border w-100 bg-light">Sign Up
	 	</Link>
	 	</div>
	 	</div>
		</>
		)
}
export default Login