import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import axios from "axios"
function LocationViewPublic(){
	const [locationValue, setLocation] = useState([])
	const {_id} = useParams()

	useEffect(()=>{
		axios.get('https://014ds-2.onrender.com/api/locations/'+_id)
		.then(res => {
				console.log(res)

			setLocation(res.data)
		})
		.catch(err=> console.log(err));
	}, [_id])
	return(
		<>
		<Topbar/>
		<div className="LocationBoxView">
		<div className="LocationBoxView2">
		<div className="LocationBoxView3">
		<h2>{locationValue.Location_name}--NewTestment Chuch</h2>
		<p>{locationValue.Location_Address}</p>
		  </div>
	<iframe
      height="300" 
      src="https://maps.google.com/maps?hl=en&amp;q=addis%20abeba+(passion%20Church)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>

      </div>
      </div>
		<Footer/>
		</>
		)
}
export default LocationViewPublic