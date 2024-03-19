import React from 'react'

const Hero = () => {

const style = {
  backgroundColor:"yellow",
  color:"black",
  borderRadius:"20px",
  padding:"20px",
  border:"2px solid red",
  margin:"auto",
  width:"750px"
}

  return (
    <div style={style}>
        <p> this data is coming from hero component</p>
        <h1>anurag</h1>
        <h2>sahil</h2>
        <h3>ashish</h3>
    </div>
  )
}

export default Hero