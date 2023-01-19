import React from 'react'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sibarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img />
        <p>
          My own information.
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarList">Life</li>
        <li className="sidebarList">Music</li>
        <li className="sidebarList">Style</li>
        <li className="sidebarList">Sport</li>
        <li className="sidebarList">Tech</li>
        <li className="sidebarList">Cinema</li>
      </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
