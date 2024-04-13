import './home.css'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import { Link } from "react-router-dom";
import Youtube from "../../components/youtube/Youtube"
import Events from  "../event/Event"
import ReactPlayer from 'react-player'
import { NavLink } from 'react-router-dom'

function Home (){   
  const API ="AIzaSyDNJg_eDMvqrOMw1jouynPopCmFAkyCaUI"
  const channelId ="UCc2crTFxw5qI6a96mt5IMqg"
  var fetchurl =`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`
  const [allvideos, setAllvideos]= useState([])
  useEffect(() => {
   fetch(fetchurl).then((response)=>response.json()).then((resJson)=>{
    const result = resJson.items.map(doc=>({
      ...doc,
      Videolink: "https://www.youtube.com/embed/"+doc.id.videoId
    }));
    setAllvideos(result)      
   })
  }, []);
  console.log(allvideos)
  return (
    <>
    <div className="watch"> {/*  THE FIRST TAG  */} 

    {/*upper*/}
        <div className="HeaderPage">
        <div className="HeaderPage2">
        <a-assets><video className="" src="./yoni.mp4" loop autoPlay muted></video> </a-assets>
        </div>
        <h1 className="">COME AS YOU ARE</h1>
      </div>

      {/* middle 1*/}
      <div className="middlePage">
      <h2>Latest Sermons</h2>
      {allvideos.map((item)=>{
        return(
      <div className="middlePage_2">
      
          <div className="middlePage_continaer">
          <div className="middlePage_box">
           <Link to="/sermon">
          <p>{item.snippet.title}</p>
          </Link>
      </div>
     </div>
     
          <div className="middlePage_continaer">
           <Link to="/sermon">
          <img src={item.snippet.thumbnails.medium.url} width="360px" height="120"/>
          </Link> 
          </div>   
                       
          </div>
          );
      })}
 </div>  
{/* middle 222222222222222222222222222222*/}
<Events />
{/*middle 3333333333333333333333333333333333*/}

 <div className="group_continaer">
 <div className="group_continaer3">
  <h1>Find your people</h1>
 <div className="group_continaer2">
 <image className="group_continaer_image">
<img src="./3.jpeg"/>
</image>
<h2>Groups</h2>
<p>When investing your heart, time, family, & resources in a church, 
</p>
<Link to="/Groups"><label>Learn more</label></Link>
</div>

<div className="group_continaer2">
 <image className="group_continaer_image">
<img src="./assets/ad.png"/>
</image>
<h2>Kids</h2>
<p>When investing your heart, time, family, & resources in a church, 
</p>
<Link to="/kids"><label>Learn more</label></Link>
</div>

<div className="group_continaer2">
 <image className="group_continaer_image">
<img src="./3.jpeg"/>
</image>
<h2>Community</h2>
<p>When investing your heart, time, family, & resources in a church, 
</p>
<label>Learn more</label>
</div>

<div className="group_continaer2">
 <image className="group_continaer_image">
<img src="./assets/ad.png"/>
</image>
<h2>Events</h2>
<p>When investing your heart, time, family, & resources in a church, 
</p>
<label>Learn more</label>
</div>

</div>




 </div>





{/*  THE FRIST TAG  */} </div> 
       <div className="footer_height">
      </div>
 </>
  );
}

export default Home