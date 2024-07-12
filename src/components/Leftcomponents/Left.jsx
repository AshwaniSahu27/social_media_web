import React from 'react';
import instagram from "../../assets/instagram.svg";
import home from "../../assets/home.svg";
import reels from "../../assets/reels.svg";
import message from "../../assets/message.svg";
import { NavLink } from 'react-router-dom';


function Left() {
  return (
    <section className="left-section   ">
     <div className="logo">
      <a href="/">
          <img src={instagram} alt="" />
          <i className="fa-brands fa-square-instagram"></i>
      </a>
     </div>

     <div className="header-lists">

      <NavLink to="/" className="home list-style-add">
        <img src={home} alt="" />
        <p className="home-name">Home</p>
      </NavLink>

      <NavLink to="/images" className="search list-style-add">
        <i className="fa-solid fa-magnifying-glass"></i>
        <p>images</p>
      </NavLink>
    
      <NavLink to="/reels" className="reels list-style-add">
        <img src={reels} alt="" />
        <p>Reels</p>
      </NavLink>

      <NavLink to="/messages" className="messages list-style-add">
        <img src={message} alt="" />
        <p>Messages</p>
      </NavLink>
     
      <NavLink to="/create-post" className="create list-style-add">
        <i className="fa-solid fa-circle-plus"></i>
        <p>Create</p>
      </NavLink>

      <NavLink to="/profile"  className="profile list-style-add">
        <div className="prof"><img src="" alt=""/></div>
        <p>Profile</p>
      </NavLink >
 
    </div>
  </section>
  )
}

export default Left