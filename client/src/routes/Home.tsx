import React, { useEffect, useState } from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import loadScript, { loadNewScript } from "../jsImport";

export default function Home() {
  const [userInfo, setuseInfo] = useState({});
  useEffect(() => {
    loadScript()
    setuseInfo(JSON.parse((localStorage.getItem("userInfo"))|| '{"_id":"","name":"","email":"","picture":"","googleId":"","userType":""}'))
  }, []);

  return (
    <div>
      <div className="global-wrap">
        <div className="global-content">
          <Header userInfo={userInfo} />
          <Body userInfo={userInfo} />
          <Footer />
        </div>
      </div>
    </div>
  );
}
