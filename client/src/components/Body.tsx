import React, { useState } from "react";
import Authors from "./Authors";
import FeaturedPost from "./Featured";
import Blog from "./posts/blogpost";
import Recomended from "./posts/recommended";
import Welcome from "./WelcomeHome";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { users, userInfo } from "../userInterface";

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
  const { isLoading, error, data, isFetching } = useQuery(["repoData"], () => {
    axios
      .get("/api/author")
      .then((res) => {
        console.log(res.data)
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  });

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
          <FeaturedPost />
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
                      return (
                        <Authors user = {user} />
                      );
                    })}
            </div>
            <small>Meet our author</small>
            <small>Meet our authors</small>
            <small>Meet our top authors</small>
          </div>
        </div>
        <div className="loop-wrap">
          <Blog />
        </div>
      </div>
      <div className="pagination-section">
        <a href="/page/2/" aria-label="Load more"></a>
        <button className="global-button">Load more</button>
      </div>
      <Recomended />
    </main>
  );
}
