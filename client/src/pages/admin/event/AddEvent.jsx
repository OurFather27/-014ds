import "./event.css";
import Sidebar from "../../../components/sidebar/Sidebar"
import { useContext, useRef, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const Event_title = useRef();
  const Event_desc = useRef();
  const Event_date = useRef();
  const [file, setFile] = useState(null);
  const history =useHistory()
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      Event_title: Event_title.current.value,
      Event_desc: Event_desc.current.value,
      Event_date: Event_date.current.value
  };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.Event_image = fileName;
      console.log(newPost);

     if (file === null) {
  console.log("The string is null");
}
      try {
        await axios.post("http://localhost:8800/api/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("http://localhost:8800/api/events", newPost);
      history.push("/admin/event")
    } catch (err) {}
  };

  return (
    <>
    <Sidebar/>
 <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>        
  <div className='w-50 border bg-secondary text-white p-5'>   
        <form>
       <div className="mb-3">
        <label htmlFor="name">Event title:</label>                    
          <input
            placeholder={"Write Event Title..."}className="form-control"ref={Event_title}/>
            
          </div>

          <div  className="mb-3">     
          <label htmlFor="name">Event Description:</label>                              
          <input placeholder={"Write Event Description..."}className="form-control"ref={Event_desc}/>
          </div>

          <div  className="mb-3">
          <label htmlFor="name">Event Date:</label>                    
          <input placeholder={"Write Event Date..."}className="form-control"ref={Event_date}/>
          </div>
        </form>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <div className="shareCancelImg" onClick={() => setFile(null)} ></div>
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
