import React from "react";
import useFetchImage from "../../hooks/useFetchImage";

function Story({idx}) {
    
  const fatchData = useFetchImage()
  
  return (
    <div className="story" key={idx}>
      <img src={fatchData.url} alt="" />
    </div>
  );
}

export default Story;
