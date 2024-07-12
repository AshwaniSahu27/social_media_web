import React from "react";
import Story from "../Subcomponents/Story";
import Post from "../Subcomponents/Post";
import Stories from "../Subcomponents/Stories";

function Middle() {

   

  return (
    <section className="middle-section">
      <div className="left-btn">
        <i className="fa-solid fa-circle-chevron-left"></i>
      </div>
      <div className="right-btn">
        <i className="fa-solid fa-circle-chevron-right"></i>
      </div>
      <div className="stories">
        <Stories/>
    
      </div>
      <div className="post-head">
         <Post/>
         <Post/>
         <Post/>
      </div>
    </section>
  );
}

export default Middle;
