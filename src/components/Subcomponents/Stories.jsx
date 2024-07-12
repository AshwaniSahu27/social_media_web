import React from 'react'
import Story from './Story'

function Stories() {
   
  return (
    Array.from({length:10}).map((value,idx)=>{
        return <Story key={idx} idx={idx}/>
      })
  )
}

export default Stories