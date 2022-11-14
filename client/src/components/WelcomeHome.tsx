import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import LogoutIcon from "@mui/icons-material/Logout";

import Avatar from "react-avatar";

export default function Welcome(props: any) {
  const logOut = () => {
    localStorage.removeItem("userInfo");
  };
  return (
    <div className="hero-content global-padding">
      <h1 className="hero-title ">
        <span>Hey, {props.userInfo.name || "User"}.</span>{" "}
        {props.userInfo.userType === "reader"
          ? " See our thoughts, stories and ideas."
          : "Write your thoughts and ideas"}
      </h1>
      <div className="subscribe-section">
        <div className="subscribe-wrap">
          {props.userInfo.userType === "writer" ? (
            <Link
              style={{ paddingLeft: 0 }}
              to={`/compose`}
              className="writer"
            >
              <Fab color="default" aria-label="edit">
                <EditIcon />
              </Fab>
            </Link>
          ) : (
            <div className="writer"  style={{ paddingLeft: 0 }}>
              <Fab color="default" aria-label="edit" disabled={true}>
                <EditIcon />
              </Fab>
            </div>
          )}
          {props.userInfo.name !== "" ? (
            <div className="writer" style={{ paddingLeft: "10px" }}>
              <Fab color="default" aria-label="edit"  onClick={(e) => {
                      logOut();
                      window.location.reload();
                    }}>
                <LogoutIcon />
              </Fab>
            </div>
          ) : (
            ""
          )}
           {props.userInfo.name !== "" ? (
            <div className="writer" style={{ paddingLeft: "10px" }}>
              <Link to ={`/profile/`}>
             <Avatar
                    className="comment-pic"
                    src={props.userInfo.picture}
                    googleId={props.userInfo.googleId}
                    size="55"
                    round={true}
                    style={{
                      display: "inline-block",
                      marginBottom: 0,
                      marginRight: 5,
                    }}
                  /></Link>
            </div>
          ) : (
            ""
          )}
          <form data-members-form="subscribe" className="subscribe-form">
            {props.userInfo.name === "" ? (
              <Link to={"/signin"} className="global-button">
                Signup/Login
              </Link>
            ) : (
              ""
            )}
            <Link to={"/signin"} className="global-button">
                Signup/Login
              </Link>
          </form>
          <div className="subscribe-form-caption">
            {props.userInfo.name === ""
              ? "Signup as either a writer or reader"
              : `You're a ${props.userInfo.userType}`}
          </div>
          
        </div>
      </div>
    </div>
  );
}
