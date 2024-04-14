import "./groupAdmin.css";
import { useContext, useRef, useState } from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";
import Sidebar from "../../../components/sidebar/Sidebar"

export default function Share() {
  const history = useHistory()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const group_description = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      group_description: group_description.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("https://014ds-2.onrender.com/api/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("https://014ds-2.onrender.com/api/groups", newPost);
      history.push('/admin/groups')
    } catch (err) {}
  };

  return (
    <>
    <Sidebar/>
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">

          <input
            placeholder={"What's in your mind ?"}
            className="shareInput"
            ref={group_description}
          />
        </div>
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
