import React from 'react'
import './topBar.css';
import { IoSearch, IoPerson, IoChatboxEllipses, IoNotifications } from "react-icons/io5";
export default function TopBar() {
  return (
    <>
      <div className='topbar_container'>
        <div className="topbar_left">
          <span className="logo">Aman</span>
          </div>
          <div className="topbar_center">
            <div className="searchbar">
              <IoSearch className='search_Icon' />
              <input placeholder='Search for friend, post or video' className='search_Input' />
            </div>
          </div>
          <div className="topbar_Right">
            <div className="topbar_Links">
              <span className="topbar_Link">Home</span>
              <span className="topbar_Link">Timeline</span>
            </div>
            <div className="topbar_Icons">
              <div className="topbar_IconItem">
                <IoPerson />
                <span className="topbar_IconBadge">1</span>
              </div>
              <div className="topbar_IconItem">
                <IoChatboxEllipses />
                <span className="topbar_IconBadge">2</span>
              </div>
              <div className="topbar_IconItem">
                <IoNotifications />
                <span className="topbar_IconBadge">1</span>
              </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className='topbar_Img' />
          </div>
      </div>
    </>
  )
}
