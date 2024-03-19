import React from 'react'

const Person = (props) => {

    const Person = {
        name: "Anurag",
        age:400,
        Salary:"1000$",
        car:"BMW",
    }
  return (
    <div className='Person'>
<h1>This data is coming from person</h1>
<h2>{props.name}</h2>
<h2>{Person.age}</h2>
<h2>{Person.Salary}</h2>
<h2>{Person.car}</h2>

    </div>
  )
}

export default Person