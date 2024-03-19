import React from 'react'

const Laptop = () => {

    const lap = {
        brandName : 'lenovo',
        processor: "ryzon5",
        ram: "8gb",
    price:65000,
    }
  return (
    //inLine styling using react
    <div style= {{
      backgroundColor:"blue",
      fontSize:"1.2rem",
      border:"2px solid yellow",
      padding:"20px",
      borderRadius:"20px",
      width:"750px",
      margin:"auto",
    }}>
      
        <h1>this data is coming from laptop component</h1>
        <h1>{lap.brandName}</h1>
        <h1>{lap.price}</h1>
    </div>
  )
}

export default Laptop