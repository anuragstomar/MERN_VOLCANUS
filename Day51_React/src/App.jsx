
import React, { useState } from 'react'
import Product from "./Product";
import Navbar from "./Navbar";
import { items } from "./Data";


const App = () => {
  const [product ,setproduct]= useState(items);
  return (
    <>
    
  <Navbar product={product } setproduct={setproduct}/>    
<Product product={product}/>

</>
)

}

export default App