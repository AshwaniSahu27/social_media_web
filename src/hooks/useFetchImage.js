import React, { useEffect, useState } from 'react'

export default function useFetchImage(data) {
   const [fatchData,setFatchData] = useState({});
   
   useEffect(()=>{
       fetch("https://picsum.photos/200/300")
       .then((res)=>{
            setFatchData(res)
       })
       
   },[data])
   
   return fatchData;
}
