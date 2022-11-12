import {
  blog,
  blogInfo,
  userInfo,
  users,
  commentInfo,
  comment,
} from "../userInterface";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import loadScript from "../jsImport";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Blog from "../components/posts/profilePost";
import CommentBox from "../components/posts/comments";

export default function Profile() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [userBio, setUserBio] = useState<users>(userInfo);
  const [comment, setComment] = useState<[comment]>([commentInfo]);
  const [authorBlog, setAuthorBlog] = useState<[blog]>([blogInfo]);
  const { id } = useParams();
  const loggedIn = JSON.parse(
    localStorage.getItem("userInfo") ||
      '{"_id":"","name":"","email":"","picture":"","googleId":"","userType":""}'
  );

  useEffect(() => {
    loadScript();
    axios
      .get(`/api/author/${loggedIn._id}`)
      .then((res) => {
        console.log(res.data);
        setUserBio(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`/api/authorpost/${loggedIn._id}`)
      .then((res) => {
        console.log(res.data);
        setAuthorBlog(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`/api/mycomments/${loggedIn.googleId}`)
      .then((res) => {
        console.log(res.data);
        setComment(res.data);
      })
      .catch((err) => console.log(err));
  });
  function handleDelete(id: String) {
    axios
      .delete(`/api/posts/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <body className="author-template author-liza">
      <div className="global-wrap">
        <div className="global-content">
          <Header userInfo={loggedIn} />
          <main className="global-main">
            <div className="archive-section is-image">
              <div className="archive-image global-image">
                <img src={userBio.picture} loading="lazy" alt={userBio.name} />
              </div>
              <h1 className="archive-title global-title">{userBio.name}</h1>

              <p className="">{userBio.email}</p>
            </div>
            <div className="loop-section global-padding">
              <div className="global-subtitle">
                <small className="global-subtitle-title">
                  Check out {loggedIn._id === id ? "Your" : "Their"}{" "}
                  <span>latest posts</span>
                </small>
                {/* {(loggedIn._id === id && loggedIn.userType === 'writer')? <small className="global-subtitle-title">
                  Check out
                  <span>latest posts</span>
                </small>: 'wwwww'} */}
              </div>
              <div className="loop-wrap">
                {authorBlog.map((content) => {
                  return <Blog content={content} handleDelete={handleDelete} />;
                })}
              </div>
            </div>
            <div className="loop-section global-padding">
              <div className="global-subtitle">
                <small className="global-subtitle-title">
                  Check out {loggedIn._id === id ? "Your" : "Their"}{" "}
                  <span>Comments</span>
                </small>
                {/* {(loggedIn._id === id && loggedIn.userType === 'writer')? <small className="global-subtitle-title">
                  Check out
                  <span>latest posts</span>
                </small>: 'wwwww'} */}
              </div>
              <div className="loop-wrap">
                {comment.map((comment) => {
                  return <CommentBox key={comment._id} comment={comment} />;
                })}
              </div>
            </div>
            <div className="pagination-section"></div>
          </main>
          <Footer />
        </div>
      </div>
    </body>
  );
}
