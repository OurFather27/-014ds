// import {useEffect, useState } from "react";
// import axios from "axios";
// import {Link} from "react-router-dom"
// function Events() {
//     const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   const [data, setData]= useState([])

//   const [events, setEvents] = useState([]);

//   const API ="AIzaSyDNJg_eDMvqrOMw1jouynPopCmFAkyCaUI"
//   const channelId ="UCc2crTFxw5qI6a96mt5IMqg"
//   var fetchurl =`https://www.googleapis.com/youtube/v3/playlists?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=50`
//   const [allvideos, setAllvideos]= useState([])
//   useEffect(() => {
//    fetch(fetchurl).then((response)=>response.json()).then((resJson)=>{
//     const result = resJson.items.map(doc=>({
//       ...doc,
//       // Videolink: "https://www.youtube.com/embed/"+doc.id.videoId
//     }));
//     setAllvideos(result)      
//    })
//   }, []);

//     // console.log(allvideos[]['id'])
//   // console.log(allvideos[0]['snippet']['title'])
//   return (
//     <>
// {/*    {allvideos.map((item)=>(
//       <div>
//       {item.snippet.title}
//       </div>
//       ))}*/}
//     }
// </>
// );
// }
// export default Events
