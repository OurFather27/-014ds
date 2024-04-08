import React , {useEffect,useRef, useState} from 'react'
import axios from "axios"
import {Link, useParams, useHistory } from 'react-router-dom'
import Sidebar from "../../../components/sidebar/Sidebar"
import './groupAdmin.css'
function GroupUpdate(){
	  const [file, setFile] = useState(null);
  const group_description = useRef();

	    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
		const {_id}= useParams();
		const [values, setValues]=useState({
		img:"",
		group_description:""
	})
	const history = useHistory() 
	useEffect(()=>{
		axios.get('http://localhost:8800/api/groups/'+_id)
		.then(res => {
				console.log(res)

			setValues(res.data)
		})
		.catch(err=> console.log(err));
	}, [_id])


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
        await axios.put("http://localhost:8800/api/upload/"+_id, data);
      } catch (err) {}
    }
 try {
      await axios.put("http://localhost:8800/api/groups/"+_id, newPost);
      history.push('/admin/groups')
    } catch (err) {}
  };



	return(
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
    )
}
export default GroupUpdate