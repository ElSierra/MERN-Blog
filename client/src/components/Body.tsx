import React, { useEffect, useState } from "react";
import Authors from "./Authors";
import FeaturedPost from "./Featured";
import Blog from "./posts/blogpost";
import Recomended from "./posts/recommended";
import Welcome from "./WelcomeHome";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { users, userInfo, blog, blogInfo } from "../userInterface";
import { getApi } from "../get";
import FPost from "./posts/fPost";
import loadScript, { loadNewScript } from "../jsImport";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";

const queryClient = new QueryClient();
export default function Body(props: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <BodyComp userInfo={props.userInfo} />
    </QueryClientProvider>
  );
}
function BodyComp(props: any) {
  const [User, setUser] = useState<[users]>([userInfo]);
  const [blog, setBlog] = useState<[blog]>([blogInfo]);
  const [randomContent, setRandomContent] = useState<[blog]>([blogInfo]);
  const [addMore, setAddMore] = useState(3);
  const { isLoading, error, data, isFetching } = useQuery(["repoData"], () => {
    getApi(setUser, "author");
    getApi(setBlog, "");
    getApi(setRandomContent, "random");
  });



  let a = [1, 2, 3, 4];
  //return first 3 numbers of ARRAY
  let b = a.slice(0, 3);
  console.log(b);

  console.log({
    error: error,
    isLoading: isLoading,
    data: data,
    isFetching: isFetching,
  });
  return (
    <main className="global-main">
      <div className="hero-section">
        <div className="hero-wrap">
          <Welcome userInfo={props.userInfo} />

          <div className="featured-section">
            <div className="global-padding">
              <div className="featured-subtitle global-subtitle">
                <small className="global-subtitle-title">
                  Random
                  <span> Stories</span>
                </small>
                <div className="featured-navigation">
                  <button
                    className="featured-btn-previous"
                    aria-label="Previous"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.775 3.225 0 12l8.775 8.775 1.498-1.407-6.421-6.267H24v-2.202H3.852l6.421-6.267-1.498-1.407Z"></path>
                    </svg>
                  </button>
                  <button className="featured-btn-next" aria-label="Next">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.225 20.775 24 12l-8.775-8.775-1.498 1.407 6.421 6.267H0v2.202h20.148l-6.421 6.267 1.498 1.407Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {randomContent.length >0?<div className="featured-wrap">
                <FPost content={randomContent[0]} />
                
              
              </div>: ''}
            </div>
          </div>
        </div>
      </div>
      <div className="loop-section global-padding">
        <div className="loop-subtitle">
          <small className="loop-subtitle-title global-title">
            See what we’ve <br />
            <span>written lately</span>
          </small>
          <div className="global-authors option-1-2-3">
            <div>
              {User.map((user, index) => {
                return <Authors user={user} />;
              })}
            </div>
            <small>Meet our author</small>
            <small>Meet our authors</small>
            <small>Meet our top authors</small>
          </div>
        </div>
        <div className="loop-wrap">
          {blog.slice(0, addMore).map((posts) => {
            return <Blog content={posts} key={posts._id} />;
          })}
        </div>
      </div>
      <div className="pagination-section">
        {blog.length > addMore ? (
          <button
            className="global-button"
            onClick={() => {
              setAddMore(addMore + 3);
            }}
          >
            Load more
          </button>
        ) : (
          ""
        )}
      </div>
      
    </main>
  );
}
