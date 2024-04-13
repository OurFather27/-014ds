// import './youtube.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react"
import { HiArrowNarrow} from "react-icons/hi";
import Spiner from "../../components/Spiner/Spiner"

function Arrow(props) {
  const { className, style, onClick } = props;
  return ( 
    <>
    <h2 className={`arrow ${className}`}onClick={onClick}>
    </h2>
</>
  );
}

function Sermon() {
     var settings = {
      dots: false,
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
      // Loading use state
    const [showspin, setShowSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false)
    }, 1000)
  }, [])
  // end Loading use state


              const [Sermons, setSermons] = useState([])
          const API ="AIzaSyDS8ThBBvBBkW5ucCyHiVrMAi-gfPRIjKo"
          const channelId ="UCc2crTFxw5qI6a96mt5IMqg"
          useEffect(()=>{
          var fetchsearch=`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
          fetch(fetchsearch).then(res=>res.json())
          .then(data=>{
          console.log(data)
          const result = data.items.map(item=>{
          // console.log(item.snippet.title,item.snippet.videoId,item.snippet,thumb)
          return{title:item.snippet.title,video:item.id.videoId,thumb:item.snippet.thumbnails}
          })
          setSermons(result)
          idvideo(result[0].video)
          idtitle(result[0].title)
          idthumbails(result[0,thumb])
          })
          console.log(Sermons)

          },[])
          const [video,idvideo] =useState("")
          const [title,idtitle] =useState("")
          const [thumb,idthumbails]=useState("")
          const [counter, setCounter]= useState(0) //click yetedergew lay 
const renderVideo =()=>{
    return(
      <>
      <div className="video-container">
        <iframe src={"//www.youtube.com/embed/"+video+"?rel=0&fs=1&modestbranding=0&theme=dark&autohide=2&modestbranding=1"}>
        </iframe>
      
 <p>{title}</p>
 </div>

        </>
      )
  }
  return (
<div className="SermonBox">
       {Sermons.length> 0 ?
    <div>
       {renderVideo()}

    <div className="mainContainer">
     <div className="container">
         <div className="RecentSermon_seeMore">
    <h2 class="text">Recent Sermons</h2>
    </div>
    <Slider {...settings}>
       {
    Sermons.map((item,index)=>{
    return <Link Key to={` ${item.title}`}className={counter===index ?"collection-item " : "collection-item"}onClick={()=>{
      idvideo(item.video)
      idtitle(item.title)
      idthumbails(item.thumb)
      setCounter(index)
    }}>

    <div className="thumb_title">
    
    <div className="">
    </div>
      <img src={item.thumb.medium.url}/>
      <p>{item.title}</p>
    </div>
    </Link>
    })  }
  </Slider>
</div>     
</div>
<a href="/allSermons">
       <div className="RecentSermon_seeMore">
    <h2 class="text">See More Sermons</h2>
    </div>
    </a>


    </div>
    :
     <Spiner /> 
    }
  
</div>
    );
}

export default Sermon;
 