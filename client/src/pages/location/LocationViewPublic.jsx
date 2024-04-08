import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import axios from "axios"
function LocationViewPublic(){
	const [locationValue, setLocation] = useState([])
	const {_id} = useParams()

	useEffect(()=>{
		axios.get('http://localhost:8800/api/locations/'+_id)
		.then(res =>{
			// console.log(res)
			setLocation(res.data)
			.catch(err=>console.log(err))
		})
	},[_id])
	return(
		<>
		<Topbar/>
		{locationValue.Location_name}
		<Footer/>
		</>
		)
}
export default LocationViewPublic