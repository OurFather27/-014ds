import { BrowserRouter, Routes, Route } from "react-router-dom";
import Youtube from "../../components/youtube/Youtube"
import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"

export default function Sermon  (){
    return(
    <div>
    <Topbar/>
    <Youtube/>
     <div className="footer_height">
      </div>
    <Footer/>
    </div>
) 
}



