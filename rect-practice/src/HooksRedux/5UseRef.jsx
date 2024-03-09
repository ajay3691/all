import React, { useRef } from 'react'
import image from './assets/logo.png'

const UseRef = () => {
  let imageEl =useRef(null)
  let clickHandler =()=>{
    console.log(imageEl.current)
  }
  return (
    <div>
      <img src={image} alt="" ref={imageEl}  />
      <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default UseRef
