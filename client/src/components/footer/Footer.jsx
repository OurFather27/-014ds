import  "./footer.css";
import { Link } from "react-router-dom";
import {FaYoutube,FaTwitter, FaFacebook,FaInstagram,FaTelegram} from "react-icons/fa"
//import home from "../youtube/home"
function Footer() {

  return (
    <>
    <footer>
      <div className="footer_main">
    <div className="footer_continaer">
      <div className="footer_1">
       <Link to="/#" style={{ textDecoration: "none" }}>
          <img src="./logo.png"/>

          {/*<div className="Newtestment"><span>Newtestment</span><p>Church</p></div>*/}
        </Link>
        {/*<h3>Join Us on Sundy at:</h3>*/}
        <p> addis abeba , bole ,<br></br> old street 474ERV 5HDJH</p>
        <div className="media_icon">
                        <a href="#"><i><FaFacebook/></i></a>
                        <a href="#"><i><FaYoutube/></i></a>
                        <a href="#"><i><FaTwitter/></i></a>
                        <a href="#"><i><FaTelegram/></i></a>
                        <a href="#"><i><FaInstagram/></i></a>
        </div>
      </div>
<hr></hr>
    <div className="footer_1">
      <ul>
       <h2>Minsitries</h2>
        <li>Prayer</li>
        <li>kids</li>
        <li>youth</li>
      </ul>
    </div>
        <div className="footer_1">
      <ul>
       <h2>About</h2>
        <li><a href="/#our story">our story</a></li>
        <li><a href="/About">leadership Team</a></li>
        <li><a href="/#values">values</a></li>
      </ul>
    </div>
    <div className="footer_1">
      <ul>
       <h2>community</h2>
      <Link to="/youtube" style={{ textDecoration: "none" }}>
        <li>Sundys</li>
        </Link>
        <li>New to Reality</li>
        <li>Events</li>
        <li>Groups</li>
      </ul>
    </div> 

    </div>    

    <div className="footer_2">
    <hr/>
      <p>© 2024 Newtestment Church. All Rights Reserved</p>
    </div>      
    </div>
</footer>
    </>        
  );
}
export default Footer;
