import React from "react";
import Topbar from "../../commponent/topbar/Topbar";
import Sidebar from "../../commponent/sidebar/Sidebar";
import Rightbar from "../../commponent/rightbar/Rightbar";
import Feed from "../../commponent/feed/Feed";
import "../home/home.css"
function Home() {
  return (
    <>
      <Topbar/>
      <div className="home-container" >
      <Sidebar />
      <Feed/>
      <Rightbar/>
      </div>
    </>
  );
}
export default Home;
