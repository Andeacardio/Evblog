import "./Menu.scss";
import posts1 from "../../data";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);
  const category = cat

  useEffect(() => {
    const interval = setTimeout(()=>{
      
      const fetchData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:8800/api/posts/?cat=${category}`
          );
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    },200)
    return () => clearInterval(interval);
  }, [category]);
  return (
    <div className="menuBar">
      <h2>Other posts you may like</h2>
      {posts
        ? posts.map((el) => {
            return (
              <div className="post" key={el.id}>
                <img src={`../upload/${el.img}`} alt="postImg" />
                <h3>{el.title}</h3>
                <button>
                  <Link to={`/post/${el.id}`}>Read more</Link>
                </button>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Menu;
