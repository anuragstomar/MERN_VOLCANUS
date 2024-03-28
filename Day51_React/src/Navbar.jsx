import React from 'react'
import { items } from './Data'
const Navbar = ({setproduct}) => {
const filterByCategory = (cat) => {
    const filteredData= items.filter((data)=> data.category === cat)
    setproduct(filteredData);
}
const filterByPrice = (p)=> setproduct(items.filter((data)=> data.price >=p));

  return (
    <>
    <div className="nav p-3 my-3 d-flex justify-content-center">

        <div className="btn btn-primary mx-3 " onClick={()=>setproduct(items)}> no filter</div>
        <div className="btn btn-dark mx-3 " onClick={()=>filterByCategory("laptops")}> Laptop</div>
        <div className="btn btn-warning mx-3" onClick={()=>filterByCategory("mobiles")}> Mobiles</div>
        <div className="btn btn-secondary mx-3" onClick={()=>filterByCategory("tablets")}> Tablets</div>
        <div className="btn btn-info mx-3"onClick={()=> filterByPrice(30000)}>{">"} 30000</div>
        <div className="btn btn-danger mx-3"onClick={()=> filterByPrice(60000)}> {">"}60000</div>
        <div className="btn btn-light mx-3"onClick={()=> filterByPrice(80000)}>{">"}80000</div>
    </div>
    </>
  )
}

export default Navbar