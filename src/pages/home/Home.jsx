import React from 'react'
import Topbar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sideBar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightBar/Rightbar";
import "./home.css"

export default function Home() {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
      <Sidebar />
      <Feed/>
      <Rightbar/>
    </div>
  </>
  )
}
