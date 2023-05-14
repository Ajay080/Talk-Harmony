import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import NavbarAfter from "../../components/NavbarAfter1/NavbarAfter1";
import Pointers from "../../components/pointers/Pointers";
import Card1 from "./Card1.png";
import "./Home.css";
import { doesTokenExist } from "../../lib/utils";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [postInput, setPostInput] = useState("");

  const token = doesTokenExist(navigate);

  const getPostsCallback = useCallback((token) => {
    const getPosts = async (token) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/posts`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const parsedPosts = JSON.parse(response.data.data.posts);

        if (response.status === 200) {
          setPosts(...posts, parsedPosts);
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    };
    getPosts(token);
  }, []);

  const createPost = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts`,
        {
          text: postInput,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 201) {
        window.location.reload();
      } else {
        alert("Failed to create post");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to create post");
    }
  };

  const handleInputChange = (e) => {
    setPostInput(e.target.value);
  };

  useEffect(() => {
    if (token) {
      getPostsCallback(token);
    }
  }, [token, getPostsCallback]);

  const DisplayData =
    posts.length > 0
      ? posts.map((post) => {
          return <Card key={post._id} props={post} />;
        })
      : null;

  return (
    <>
      <NavbarAfter />
      <Pointers />
      <div className="home">
        <div className="add-card">
          <div className="card-dp">
            <img src={Card1}></img>
          </div>
          <div className="type-something">
            <textarea
              placeholder={"Type Something"}
              onChange={handleInputChange}
              value={postInput}
            ></textarea>
          </div>
          <button className="post" onClick={createPost}>
            Post
          </button>
        </div>
        <div className="feed">{DisplayData}</div>
      </div>
    </>
  );
};

export default Home;
