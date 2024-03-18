import React from 'react'

const Laptop = () => {

    const lap = {
        brandName : 'lenovo',
        processor: "ryzon5",
        ram: "8gb",
    price:65000,
    }
  return (
    <div>
        <h1>this data is coming from laptop component</h1>
        <h1>{lap.brandName}</h1>
        <h1>{lap.price}</h1>
    </div>
  )
}

export default Laptop