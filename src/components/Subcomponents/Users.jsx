import React from "react";
import blueTic from "../../assets/blueTic.svg"
import DotDot from "../../assets/DotDot.svg"
import useFetchImage from "../../hooks/useFetchImage";

function Users() {
  const fatchData = useFetchImage()
    
  return (
    <>
      <div className="user-info-one ">
        <div className="user-info-logo hover-dailogBox">
          <img src={fatchData.url} alt="" />
        </div>
        <div className="user-info-one-paras hover-dailogBox">
          <div className="user-info-one-para1">
            Ashwani_sahu27
            <span>
              <img src={blueTic} alt="" />
            </span>
            <span>.5h</span>
          </div>
          <div className="user-info-one-para2">original audio</div>
        </div>
        <div className="dotdot">
          <img src={DotDot} alt="" />
        </div>
      </div>
    </>
  );
}

export default Users;
