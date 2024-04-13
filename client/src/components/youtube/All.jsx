
import {Link, useParams} from "react-router-dom";
import React, {useState, useEffect} from "react"
import  "./youtube.css"

function Sermon(props) {

  return (
<>  
<div className="PlaylistSermons">
      <Link to="/reactjs">
      <h1> react</h1>
      </Link>
      <Link to="/nodejs">
      <h1>node </h1>
      </Link>
      <Link to="/latest">
      <h1> latest </h1>
      </Link>

      </div>
      </>
    );
    }

export default Sermon;
 