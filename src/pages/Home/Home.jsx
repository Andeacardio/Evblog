import { Link } from "react-router";
import posts from "../../data";
import "./Home.scss";
import "../../common.scss";
import Img from "../../assets/img/1.jpg";

const Home = () => {
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
          {posts.map((post) => {
            return (
              <div className="post" key={post.id}>
                <div className="img">
                  <img src={post.img} alt="postImage" />
                </div>
                <div className="content">
                  <Link to={`/post/${post.id}`} className="link cLink">
                    <h2>{post.title}</h2>
                  </Link>
                  <p>{post.desc}</p>
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
