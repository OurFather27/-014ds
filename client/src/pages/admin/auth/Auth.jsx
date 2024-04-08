import {useEffect, useState} from "react"
import {Link,useHistory} from "react-router-dom"
import axios from "axios"
function Dashboard(){
	const [suc, setSuc] = useState()
	const history = useHistory()
	axios.defaults.withCredentials = true;

	useEffect(()=>{
	axios.get('http://localhost:8800/api/auth/dashboard')
	.then(res=> {
		if(res.data != "Success"){
			history.push('/login')
		}else{
			setSuc("Successded Ok")
		}
	}).catch(err=>console.log(err))

	},[])




	return(
		<>
		page not found
		</>
		)
}
export default Dashboard