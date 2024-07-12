import React, { useEffect } from "react";
import myPhoto from "/my_photo.jpg"
import createSvg from "../assets/workCreate.svg"
import authServices from "../appwrite/auth";

function Profile() {

 
  useEffect(()=>{
    const fetchRandomVideos = async () => {
      const apiKey = 'OYsfJVb7yOsLxS0LtKgS0wFAZcPQ2kotVVjlyIUw0gLVyJPtczx0EKqz';
      const url = 'https://api.pexels.com/videos/popular?per_page=1';
      
      const response = await fetch(url, {
          headers: {
              Authorization: apiKey
          }
      });
  
      if (response.ok) {
          const data = await response.json();
          console.log(data.videos);
      } else {
          console.error('Error fetching videos:', response.statusText);
      }
  };
  
  fetchRandomVideos();

  },[])
   

  return (
    <section class="profile-page">
      <div class="profile-page-head">
        <div class="profile-page-head-img">
          <img src={myPhoto} alt="" />
        </div>

        <div class="profile-page-head-info">
          <div class="head-info1">
            <p>Ashwani_Kumar_Sahu27</p>
            <button>Edit Profile</button>
            <button>Archive</button>
          </div>

          <div class="head-info2">
            <div class="head-info2-post">
              <span>5</span>&nbsp; post
            </div>
            <div class="head-info2-followers">
              <span>195</span>&nbsp; followers
            </div>
            <div class="head-info2-following">
              <span>90</span>&nbsp; following
            </div>
          </div>

          <div class="head-info3">
            <p>ashwani sahu</p>
            <p>Software engineer 😇</p>
            <p>Bilaspur 🏡</p>
          </div>
        </div>
      </div>

      <div class="profile-works">
        <div class="work-one">
          <img src={createSvg} alt="" />
        </div>
      </div>

      <div class="profile-activity">
        <div class="profile-activity-posts profile-style">
          <i class="fa-solid fa-table-cells"></i>
          POSTS
        </div>
        <div class="profile-activity-reels profile-style">
          <i class="fa-brands fa-instagram"></i>
          REELS
        </div>
        <div class="profile-activity-saved profile-style">
          <i class="fa-solid fa-floppy-disk"></i>
          SAVED
        </div>
        <div class="profile-activity-tagged profile-style">
          <i class="fa-solid fa-floppy-disk"></i>
          TAGGED
        </div>
      </div>

      <div class="profile-posts">
        <div class="profile-post1"></div>
        <div class="profile-post1"></div>
        <div class="profile-post1"></div>
      </div>
    </section>
  );
}

export default Profile;
