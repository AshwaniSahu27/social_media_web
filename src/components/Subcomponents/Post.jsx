import React from "react";
import Users from "./Users";
import useFetchImage from "../../hooks/useFetchImage";

function Post() {
  const fatchData = useFetchImage()

  return (
    <div className="posts">

      <div className="user-info">
        <Users />
        <div className="user-post">
          <img src={fatchData.url} />
        </div>
        <div className="user-post-data">
          <div className="user-post-data-one">
            <div className="user-post-data-one1">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-comment"></i>
              <i className="fa-solid fa-share"></i>
            </div>
            <i className="fa-regular fa-bookmark"></i>
          </div>
          <div className="user-post-data-two">300554 likes</div>
          <div className="user-post-data-three">
            Ashwani_sahu27
            <span>
              <img src="svgs/blueTic.svg" alt="" />
            </span>{" "}
            &nbsp; Hello! this is Ashwani sahu
          </div>
          <div className="user-post-data-four">
            <a href="#">View all 345 comments</a>
          </div>
          <div className="user-post-data-five">
            <input type="text" placeholder="Add a comment..." />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Post;
