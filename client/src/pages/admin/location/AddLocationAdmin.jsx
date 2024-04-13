import "./locationAdmin.css";
import Sidebar from "../../../components/sidebar/Sidebar"
import { useContext, useRef, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const Location_name = useRef();
  const Location_Address = useRef()
  const [file, setFile] = useState(null);
  const history =useHistory()
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      Location_name: Location_name.current.value,
      Location_Address: Location_Address.current.value
  };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.Location_image = fileName;
      console.log(newPost);

     if (file === null) {
  console.log("The string is null");
}
      try {
        await axios.post("http://localhost:8800/api/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("http://localhost:8800/api/locations", newPost);
      history.push("/admin/location")
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
            placeholder={"Write Event Title..."}className="form-control"ref={Location_name}/>
            
          </div>

          <div  className="mb-3">     
          <label htmlFor="name">Event Description:</label>                              
          <input placeholder={"Write Event Description..."}className="form-control"ref={Location_Address}/>
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
