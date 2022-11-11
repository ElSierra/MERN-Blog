import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import LogoutIcon from "@mui/icons-material/Logout";
import Logout from "@mui/icons-material/Logout";

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
          <form data-members-form="subscribe" className="subscribe-form">
            {props.userInfo.name === "" ? (
              <Link to={"/signin"} className="global-button">
                Signup/Login
              </Link>
            ) : (
              ""
            )}
          </form>
          <div className="subscribe-form-caption">
            {props.userInfo.name === ""
              ? "Signup as either a writer or reader"
              : `You're a ${props.userInfo.userType}`}
          </div>
          <div className="subscribe-alert">
            <small className="alert-loading global-alert">
              Processing your application
            </small>
            <small className="alert-success global-alert">
              Please check your inbox and click the link to confirm your
              subscription.
            </small>
            <small className="alert-error global-alert">
              There was an error sending the email
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
