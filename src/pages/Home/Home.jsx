import { Link } from "react-router";
import posts from "../../data";
import "./Home.scss";
import "../../common.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="posts">
          {posts.map((post) => {
            return (
              <div className="post" key={post.id}>
                <div className="img">
                  <img src={post.img} alt="postImage" />
                </div>
                <div className="content">
                  <Link to={`/post/${post.id}`} className="link cLink">
                    <h1>{post.title}</h1>
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
