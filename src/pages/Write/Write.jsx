import { useState } from "react";
import "./Write.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import moment from "moment";
import Cookies from "js-cookie";

const Write = () => {
  const state = useLocation().state
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () =>{
    try{
      const formData = new FormData()
      formData.append("file",file)
      const res = await axios.post("http://localhost:8800/api/upload",formData)
      return res.data

    }catch(err){
      console.log(err)
    }
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const imgUrl = await upload()
    try{
      state ? await axios.put(`http://localhost:8800/api/posts/${state.id}`,{
        title,desc:value,cat,img:file ? imgUrl : "",headers: {
                  Authorization: Cookies.get("access_token"),
                },
      }) : await axios.post(`http://localhost:8800/api/posts/`,{
        title,desc:value,cat,img:file ? imgUrl : "", date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),headers: { Authorization: Cookies.get("access_token")},
      }) 
      navigate("/")
    }catch(err){
      console.log(err)
    }
  };
  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="editContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="top">
          <h3>Publish</h3>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
              checked={cat === "art"}
              type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <label htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="items">
          <h3>Category</h3>
          <div className="item">
            <input
              checked={cat === "art"}
              type="radio"
              name="cat"
              value="art"
              id="art"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="item">
            <input
              checked={cat === "science"}
              type="radio"
              name="cat"
              value="science"
              id="science"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="item">
            <input
              checked={cat === "tecnology"}
              type="radio"
              name="cat"
              value="tecnology"
              id="tecnology"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="tecnology">Tecnology</label>
          </div>
          <div className="item">
            <input
              checked={cat === "cinema"}
              type="radio"
              name="cat"
              value="cinema"
              id="cinema"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="item">
            <input
              checked={cat === "design"}
              type="radio"
              name="cat"
              value="design"
              id="design"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="item">
            <input
              checked={cat === "food"}
              type="radio"
              name="cat"
              value="food"
              id="food"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
