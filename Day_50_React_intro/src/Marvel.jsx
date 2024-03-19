import React from 'react'

const Marvel = () => {
let Character= {
    Name:"Spiderman",
    Height:5.2,
    Power: "cobweb",
}
const Spiderman ={
    backgroundColor:"yellow",
    color:"black",
}

  return (
    <div className='hero' >
        <h1> Some details about Spiderman</h1>

<h3 style={{
    backgroundColor:"Red",
}}>{Character.Name}</h3>
<h3 style={Spiderman}>{Character.Height}</h3>
<h3>{Character.Power}</h3>
    </div>
  )
}

export default Marvel