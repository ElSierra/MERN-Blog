import React from "react";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import Cookies from "js-cookie";

export default function Header(props: any) {
  const logOut = () => {
    localStorage.removeItem("userInfo");
    Cookies.remove('bearer');
  };
  console.log(props);
  return (
    <header className="header-section">
      <div className="header-wrap global-padding">
        <div className="header-logo">
          <a href="/" className="is-logo">
            <img src="/logo.png" alt="IOI home" />
          </a>
        </div>
        <div className="header-nav">
          <span className="header-search search-open is-mobile">
            {props.userInfo._id !== "" ? (
              <Link to={`/profile/`}>
                <Avatar
                  className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default css-mm42gz-MuiButtonBase-root-MuiFab-root"
                  src={props.userInfo.picture}
                  googleId={props.userInfo.googleId}
                  size="50"
                  round={true}
                  style={{
                    display: "inline-block",
                    marginBottom: 0,
                    marginRight: 5,
                  }}
                />
              </Link>
            ) : (
              <Link to={`/signin/`}>
                <Avatar
                  className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default css-mm42gz-MuiButtonBase-root-MuiFab-root"
                  src="/non.png"
                  googleId={props.userInfo.googleId}
                  size="50"
                  round={true}
                  style={{
                    display: "inline-block",
                    marginBottom: 0,
                    marginRight: 5,
                  }}
                />
              </Link>
            )}
          </span>

          <nav>
            <ul>
              {props.userInfo.userType === "writer" ? (
                <Link style={{ paddingLeft: 22 }} to={`/compose`}>
                  <Fab color="default" aria-label="edit">
                    <EditIcon />
                  </Fab>
                </Link>
              ) : (
                ""
              )}
              {props.userInfo._id !== "" ? (
                <Link to={`/profile/`}>
                  <li className="is-dropdown">
                    <Avatar
                      className="comment-pic MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default css-mm42gz-MuiButtonBase-root-MuiFab-root"
                      src={props.userInfo.picture}
                      googleId={props.userInfo.googleId}
                      size="55"
                      round={true}
                      style={{
                        display: "inline-block",
                        marginBottom: 0,
                        marginRight: 5,
                      }}
                    />
                  </li>
                </Link>
              ) : (
                <Link to={`/signin/`}>
                  <li className="is-dropdown">
                    <Avatar
                      className="comment-pic MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default MuiFab-root MuiFab-circular MuiFab-sizeLarge MuiFab-default css-mm42gz-MuiButtonBase-root-MuiFab-root"
                      src="/non.png"
                      googleId={props.userInfo.googleId}
                      size="55"
                      round={true}
                      style={{
                        display: "inline-block",
                        marginBottom: 0,
                        marginRight: 5,
                      }}
                    />
                  </li>
                </Link>
              )}
              {/* <li className="header-search search-open is-desktop global-button">
                <span >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z" />
                  </svg>
                  Search
                </span>
              </li> */}
              {props.userInfo.name === "" ? (
                <li className="signup">
                  <Link
                    className="global-button"
                    to={`/signin`}
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
                    Sign In
                  </Link>
                </li>
              ) : (
                <li className="signup">
                  <a
                    className="global-button logout"
                    href="#:"
                    onClick={(e) => {
                      logOut();
                      window.location.reload();
                    }}
                  >
                    LogOut
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
