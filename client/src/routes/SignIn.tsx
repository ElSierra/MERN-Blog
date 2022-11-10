import React, { useEffect, useState } from "react";
import GoogleLogin, { GoogleLogout } from "@caranmegil/react-google-login";
import { emptyData } from "../empty";
import { gapi } from "gapi-script";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import GoogleIcon from "@mui/icons-material/Google";
import { height, padding } from "@mui/system";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const [profile, setProfile] = useState(emptyData);
  const [alignment, setAlignment] = useState("reader");
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  const onSuccess = (res: any) => {
    setProfile(res.profileObj);
    const signInInfo = {
        ...res,userType: alignment,
    }
    axios
      .post("/api/login", signInInfo, {})
      .then(function (response) {
        console.log(response);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
    console.log(res);
    setIsSignedIn(true);
    
    console.log (JSON.parse((localStorage.getItem("userInfo"))|| '{"_id":"","name":"","email":"","picture":"","googleId":"","userType":""}'));
  };

  const logOut = () => {
    setProfile(emptyData);
    setIsSignedIn(false);

    localStorage.removeItem("userInfo");
  };
  const onFailure = (err: Error) => {
    setIsSignedIn(false);
    console.log("failed:", err);
  };

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <body className="page-template page-signin custom-page">
      <div className="custom-wrap">
        <div
          className="custom-image global-bg-image"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1548081087-a8a3bc4ff088?crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;fit&#x3D;max&amp;fm&#x3D;jpg&amp;ixid&#x3D;MnwxMTc3M3wwfDF8c2VhcmNofDE0OHx8dGV4dHVyZXxlbnwwfHx8fDE2NDY3NzQ2Njg&amp;ixlib&#x3D;rb-1.2.1&amp;q&#x3D;80&amp;w&#x3D;2000)`,
          }}
        ></div>
        <div className="custom-container">
          <div className="custom-logo-wrap">
            <div className="custom-logo">
              <a href="https://basho.fueko.net" className="is-logo">
                <img
                  src="https://basho.fueko.net/content/images/2022/01/basho.svg"
                  alt="Basho home"
                />
              </a>
            </div>
          </div>
          <div className="custom-content">
            <form
              data-members-form="signin"
              style={{ display: !isSignedIn ? "inline-block" : "none" }}
            >
              <h1 className="custom-title global-title">Welcome back!</h1>
              <ToggleButtonGroup
                style={{
                  marginBottom: "20px",
                  height: "100px",
                  width: "500px",
                  paddingLeft: "10px",
                }}
                color="standard"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="writer">Writer</ToggleButton>
                <ToggleButton value="reader">Reader</ToggleButton>
              </ToggleButtonGroup>

              <GoogleLogin
                className="btn"
                clientId={process.env.REACT_APP_CLIENT_ID || ""}
                render={(renderProps) => (
                  <button
                    className="global-button"
                    style={{ display: "block" }}
                    onClick={(e) => {
                      renderProps.onClick();
                      e.preventDefault();
                      console.log(profile);
                    }}
                  >
                    <GoogleIcon
                      sx={{
                        paddingTop: "10px",
                        fontSize: 40,
                        textAlign: "center",
                      }}
                    />{" "}
                    <span style={{ fontSize: 25 }}></span>
                  </button>
                )}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
             

              <div>
                <small
                  className="alert-loading global-alert"
                  style={{ display: isSignedIn ? "inline-block" : "none" }}
                >
                  Successfully Logged In, Redirect You to Home Page
                </small>
              </div>

              <div>
                <small
                  className="alert-error global-alert"
                  style={{ display: !isSignedIn ? "inline-block" : "none" }}
                >
                  There was an error sending the email
                </small>
              </div>
            </form>
            <div
              className="alert-success"
              style={{ display: isSignedIn ? "inline-block" : "none" }}
            >
              <h2 className="custom-alert-title">Great!</h2>
              <p>You're Logged in</p>
              <Link
                className="global-button"
                to={`/`}
                state={
                  {
                    // id: props.id,
                    // title: props.title,
                    // content: props.content,
                    // date: props.date,
                    // postImg: props.postImg,
                    // authorName: props.authorName,
                    // authorImg: props.authorImg,
                  }
                }
              >
                Go to Home Page
              </Link>
              <GoogleLogout
                style={{ display: "inline-block" }}
                render={(renderProps) => (
                    <button
                    className="global-button"
                    style={{ display: "block" }}
                    onClick={(e) => {
                      renderProps.onClick();
                      e.preventDefault();
                      console.log(profile);
                    }}
                  >
                    <GoogleIcon
                      sx={{
                        paddingTop: "10px",
                        fontSize: 40,
                        textAlign: "center",
                      }}
                    />{" "}
                    <span style={{ fontSize: 25 }}></span>
                  </button>
                )}
                clientId={process.env.REACT_APP_CLIENT_ID || ""}
                onLogoutSuccess={logOut}
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
