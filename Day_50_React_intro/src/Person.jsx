
import Hero from "./Hero";
const Person = () => {
    const heroes={
        hero1: 'superman',
        hero2: 'spiderman'
      }
      console.log(heroes.hero1)
    
    
      const arr = ["apple", "banana", "Mango",12,20.30];
      return(
    
        //we  will use <> (fragment) to return multiple divs.   
        <>  
        { " "}
        {/* <div>
          <h1>welcome to React Tutorial</h1>
          <h2>My name is {heroes.hero1}& i am learning React</h2>
    
          <h3>My name is {heroes.hero2}& i am already know react pretty well</h3>
        </div>
    
        <div>
          <h1>hello i am anurag and i scored {92.5+3} in my final exam.</h1>
        </div> */}
    
       {arr.map((d)=> (
        <div key={Math.random()}><h1>{d}</h1></div>
       ))}
        <Hero/>
        </>
       
      )
}

export default Person