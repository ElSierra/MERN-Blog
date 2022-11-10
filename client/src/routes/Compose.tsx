import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../components/posts/Form";
import Header from "../components/Header";

function Compose() {
 
  const User = JSON.parse((localStorage.getItem("userInfo"))|| '{"_id":"","name":"","email":"","picture":"","googleId":"","userType":""}')

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
      />
    </div>
  );
}
export default Compose;
