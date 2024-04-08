import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import "./location.css"
import Helmet from 'react-helmet';
import LoadingIcons from 'react-loading-icons'
import {useEffect, useState} from "react"
import Spiner from "../../components/Spiner/Spiner"

function Location() {
  // Loading use state
    const [showspin, setShowSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false)
    }, 800)
  }, [])
  // end Loading use state


  return (
    <>
    <Topbar/>

    {/*<Helmet bodyAttributes={{style: "background-image : url('./1.jpeg')"}}/>*/}
         {/*Loading.....*/} {showspin ?  <Spiner /> :

<div className="Location">
<h1 className="">Find your Location</h1>

<div className="Location2">
      <div className="Location_container">
        
         <p>
           <h4>Hawassa</h4><br/>
            909 Third Avenue, #986<br/>
            New York, NY  10150<br/>
            info@fortissociety.org
         </p>
         <h3>View Direction</h3>
         </div>


      <div className="Location_container">
         <p>
           <h4>Addis abeba</h4><br/>
            909 Third Avenue, #986<br/>
            New York, NY  10150<br/>
            info@fortissociety.org
         </p>
        <h3>View Direction</h3>
         </div>
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