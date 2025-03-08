import { Link, useLocation } from "react-router";
import posts from "../../data";
import "./Home.scss";
import "../../common.scss";
import Img from "../../assets/img/1.jpg";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const category = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts${category}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

const getText = (html)=>{
  const doc = new DOMParser().parseFromString(html,"text/html")
  return doc.body.textContent
}

  return (
    <>
      <div className="home">
        <div className="top">
          <div className="picture">
            <div className="img">
              <img src={Img} alt="" />
            </div>
          </div>
          <div className="welcome">
            <h1>Welcome to EvBlob!</h1>
            <p>
              This is a place where you can share your opinions and experince
              about different topics.
            </p>
          </div>
        </div>
        <div className="posts">
          {posts &&
            posts.map((post) => {
              return (
                <div className="post" key={post.id}>
                  <div className="img">
                    <img src={`../upload/${post.img}`} alt="postImage" />
                  </div>
                  <div className="content">
                    <Link
                      to={`/post/${post.id}`}
                      className="link cLink"
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                    >
                      <h2>{post.title}</h2>
                    </Link>
                    <p>{getText(post.desc)}</p>
                    <button>Read more</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
