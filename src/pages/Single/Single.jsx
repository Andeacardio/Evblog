import "./Single.scss";
import Delete from "../../assets/img/delete.png";
import Edit from "../../assets/img/pen.png";
import { Link, useLocation, useNavigate } from "react-router";
import Menu from "../../components/Menu/Menu";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext.jsx";
import axios from "axios";
import moment from "moment";
import Cookies from "js-cookie";

const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${postId}`, {
        headers: {
          Authorization: Cookies.get("access_token"),
        },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const getText = (html)=>{
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }

  return (
    <>
      <div className="single">
        <div className="content">
          <img src={`../upload/${post?.img}`} alt="post Image" />
          <div className="user">
            {post.userImg && <img src={post.userImg} alt="" />}
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser?.username === post?.username && (
              <div className="edit">
                <Link to={`/write?edit=2`} state={post}>
                  <img src={Edit} alt="edit" />
                </Link>
                <img src={Delete} alt="delete" onClick={handleDelete} />
              </div>
            )}
          </div>
          <div className="texts">
            <h2>{post.title}</h2>
            {getText(post.desc)}
          </div>
        </div>
        <div className="menu">
          <Menu cat={post.cat} />
        </div>
      </div>
    </>
  );
};

export default Single;
