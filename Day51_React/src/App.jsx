
import React, { useEffect,useState } from 'react'
import Product from "./Product";
import Navbar from "./Navbar";
import { items } from "./Data";
import FormHandling from './FormHandling';


const App = () => {
  const [product ,setproduct]= useState(items);

  useEffect(()=>{

    document.title = product[0].category
    console.log("this is use effect hook")
  },[product])//dependency array. 
  return (
    <>
    
  <Navbar product={product } setproduct={setproduct}/>    
{/* <Product product={product}/> */}
<FormHandling/> 
</>
)

}

export default App