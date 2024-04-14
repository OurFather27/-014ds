import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import "./location.css"
import Helmet from 'react-helmet';
import LoadingIcons from 'react-loading-icons'
import {useEffect, useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Spiner from "../../components/Spiner/Spiner"

function Location() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [Location, setLocation] = useState([]);

  // Loading use state
    const [showspin, setShowSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false)
    }, 800)
  }, [])
  // end Loading use state

  
  useEffect(() => {
    const fetchLocation = async () => {
      const res = await axios.get('https://014ds-2.onrender.com/api/locations')
      setLocation(
        res.data.sort((a,b) => new Date(a) < new Date(b) ? 1 : -1)
)
        };
        fetchLocation();
  }, []);
  return (
    <>
    <Topbar/>

    {/*<Helmet bodyAttributes={{style: "background-image : url('./1.jpeg')"}}/>*/}
         {/*Loading.....*/} {showspin ?  <Spiner /> :

<div className="Location">
<h1 className="">Find your Location</h1>

<div className="Location2">
      
        {Location.map((location)=>(
          <div className="Location_container">
           <h4>{location.Location_name}</h4><br/>
            <p>{location.Location_Address}</p>
        <Link to={`/location-view/${location._id}`}><h3>View Direction</h3></Link>
         </div>
          ))}
        
         </div>
</div>
}
{/*
<iframe
      height="300" 
      src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=addis%20abeba+(passion%20Church)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      <a href="https://www.maps.ie/population/">Population Estimator map</a>
      </iframe>*/}
{/*<div className="footer_height">
</div>*/}
      <Footer/>
    </>
  );
}

export default Location