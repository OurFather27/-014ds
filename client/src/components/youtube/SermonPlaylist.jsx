import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react"
import  "./youtube.css"
function Arrow(sild) {
  const { className, style, onClick } = sild;
  return ( 
    <>
    <h2 className={`arrow ${className}`}onClick={onClick}>
    </h2>
</>
  );
}


function SermonPlaylist(props) {
   var settings = {
      dots: true,
      autoplay:false,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2 
          }
        },
        
      ]
    };

  const {sermonName}= useParams();
  const {latest}=useParams();
  const [Sermons, setSermons] = useState([])
     //kalhon hulunm youtube lay yaluten playlist fetch adergo database lay save maderg kezan save yetergewn meterat
    // let playlistid=""
    // if(sermonName=="reactjs"){
    //   playlistid="PLQ7HWqd0j1-m8QrtUxGT45_xzxlYM9As2" 
    // }
    // else if(sermonName=="nodejs"){
    //   playlistid="PLQ7HWqd0j1-n_rtq0rqZ3c2-_ut9fZDNG" 
    // }

  const API ="AIzaSyDS8ThBBvBBkW5ucCyHiVrMAi-gfPRIjKo"
  const channelId ="UCc2crTFxw5qI6a96mt5IMqg"
 useEffect(()=>{
if (sermonName){
        var fetchplaylist =`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=20&playlistId=PLQ7HWqd0j1-n_rtq0rqZ3c2-_ut9fZDNG&key=AIzaSyA6KSVdV6-6ga34P1HLER42f7LCPSf__5E`

    fetch(fetchplaylist).then(res=>res.json())
    .then(data2=>{
      // console.log(data)
    const result = data2.items.map(item=>{
         // console.log(item.snippet.title,item.snippet.videoId,item.snippet,thumb)
                return{title:item.snippet.title,video:item.contentDetails.videoId,thumb:item.snippet.thumbnails}

      })
    setSermons(result)
    idvideo(result[0].video)
    idtitle(result[0].title)
    idthumbails(result[0,thumb])
    })
  }
   else{
    var fetchsearch=`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`
    fetch(fetchsearch).then(res=>res.json())
    .then(data=>{
      // console.log(data)
    const result = data.items.map(item=>{
         // console.log(item.snippet.title,item.snippet.videoId,item.snippet,thumb)
        return{title:item.snippet.title,video:item.id.videoId,thumb:item.snippet.thumbnails}
      })
    setSermons(result)
    idvideo(result[0].video)
    idtitle(result[0].title)
    idthumbails(result[0,thumb])
    })
  }
  },[])
  const [video,idvideo] =useState("")
  const [title,idtitle] =useState("")
  const [thumb,idthumbails]=useState("")
  const [Playlistid,idPlaylist]=useState("")
  const [counter, setCounter]= useState(0) //click yetedergew lay 
  const renderVideo =()=>{
    return(
            <>
      <div className="video-container">
        <iframe src={"//www.youtube.com/embed/"+video+"?rel=0"} 
        frameBorder="0" allowFullScreen></iframe>
      
 <p>{title}</p>
 </div>

        </>
      )
  }
  return (
<>  
       {Sermons.length> 0 ?
    <>
       {renderVideo()}
    <div className="mainContainer">
     <div className="container">
         <div className="RecentSermon_seeMore">
   <h2 class="text">Recent Sermons</h2>
    </div>
    <Slider {...settings}>
       {
    Sermons.map((item,index)=>{
    return <Link Key={item.video}className={counter===index ?"collection-item " : "collection-item"}onClick={()=>{
      idvideo(item.video)
      idtitle(item.title)
      idthumbails(item.thumb)
      setCounter(index)
    }}>

    <div className="thumb_title">
    <div className="">
    </div>
      <img src={item.thumb.medium.url} width="300px"/>
      <p>{item.title}</p>
    </div>
    </Link>
    })  }
  </Slider>
</div>     
</div>

    </>
    :
    <h1>Loading...</h1>
    }

    </>
    );
    }

export default SermonPlaylist;
 