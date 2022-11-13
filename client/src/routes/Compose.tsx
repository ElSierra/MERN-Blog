import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../components/posts/Form";
import Header from "../components/Header";
import NotFound from "./NotFound";

function Compose() {
 
  const User = JSON.parse((localStorage.getItem("userInfo"))|| '{"_id":"","name":"","email":"","picture":"","googleId":"","userType":""}')
if (User.userType === "writer"){
  return (
    <div>
      {/* <div style= {{display: "none"}}>
      <NotSignedIn  updateProfileInfo = {updateProfileInfo} /></div> */}
      <Header userInfo={User} />
      <Form
        name="Compose"
        imageUrl={User.picture}
        uName={User.name}
        googleid={User.googleId}
        id = {User._id}
      />
    </div>
  );}
  else {
    return (
      <div>
        {/* <div style= {{display: "none"}}>
        <NotSignedIn  updateProfileInfo = {updateProfileInfo} /></div> */}
        <Header userInfo={User} />
        <NotFound/>
      </div>
    ); 
  }
}
export default Compose;
