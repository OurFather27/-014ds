
import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react"
import  "./youtube.css"

function Sermon(props) {
  const {sermonName}= useParams();
  const {latest}=useParams();
  const [Sermons, setSermons] = useState([])
     //kalhon hulunm youtube lay yaluten playlist fetch adergo database lay save maderg kezan save yetergewn meterat
    let playlistid=""
    if(sermonName=="reactjs"){
      playlistid="PLQ7HWqd0j1-nATtVzjGSw_4A5IISroDYI" 
    }else{
      playlistid="PLQ7HWqd0j1-nATtVzjGSw_4A5IISroDYI"
    }

  const API ="AIzaSyDS8ThBBvBBkW5ucCyHiVrMAi-gfPRIjKo"
  const channelId ="UCc2crTFxw5qI6a96mt5IMqg"
 useEffect(()=>{
if (sermonName=="reactjs"|| sermonName=="nodejs"){
        var fetchplaylist =`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=20&playlistId=&key=AIzaSyA6KSVdV6-6ga34P1HLER42f7LCPSf__5E`

    fetch(fetchplaylist).then(res=>res.json())
    .then(data2=>{
      // console.log(data2)
    const result = data2.items.snippetmap(item=>{
         // console.log(item..title,item.snippet.videoId,item.snippet,thumb)
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

 ////////////////////////////////////////////  for title
  const [allvideos, setAllvideos]= useState([])
  var fetchurl =`https://www.googleapis.com/youtube/v3/playlists?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=2`

 useEffect(() => {
   fetch(fetchurl).then((response)=>response.json()).then((resJson)=>{
    const result = resJson.items.map(doc=>({
      ...doc    
    }));
    setAllvideos(result)  
   })
  }, []);
  // console.log(allvideos)
////////////////////////////////////////////////////
 // const [id, ID] = useState("")
  const [video,idvideo] =useState("")
  const [title,idtitle] =useState("")
  const [thumb,idthumbails]=useState("")
  const [Playlistid,idPlaylist]=useState("")
  const [counter, setCounter]= useState(0) //click yetedergew lay 
  const renderVideo =()=>{
   
  }
  return (
<>  
<div className="PlaylistSermons">
      <Link to="/reactjs">
      <h1> marsil</h1>
      </Link>
      <Link to="/nodejs">
      <h1>node </h1>
      </Link>

      <Link to="/latest">
      <h1> latest </h1>
      </Link>
      {allvideos.map((item)=>{
        return(
      <div className="middlePage_2">
       <Link to="/latest">
          <p>{item.snippet.title}</p>                       
          </Link>
          </div>
          );
      })}
      </div>
      </>
    );
    }

export default Sermon;
 