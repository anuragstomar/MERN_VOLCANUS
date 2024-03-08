 //synchronus
//  const synchronus = () => {
//     console.log("superman")
//     console.log("spiderman")
//     console.log("batman")
// }

// //asynchronus-->

// const asynchronus = () => {
//     console.log("anurag  bhai zindabaad");
//     setTimeout(()=>{
//         console.log("vellore institude of technology");
//     },2000);
//     console.log("volcanus");
// };
//calling function synchronus--->>>>
// synchronus();

//calling function asynchronus--->>>>
// asynchronus();


//fetching data using async & await ----->>>>>>>

const fetchData = async () => {
    const api = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await api.json();

    console.log(data);
}

// fetchData();

const fetchMealData = async() =>{
    const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=indian");
    const data = await api.json();
    // console.log(data);
    return data.meals;


};
// console.log(fetchMealData())

const showDataToDom = async () =>{
    const data = await fetchMealData();
    console.log("this data is coming from mealDB API", data[0]);
//     document.querySelector(".main").innerHTML=`
//     <div>
// <h1>${data[0].strMeal}</h1>
// <img src= ${data[0].strMealThumb} alt = ${data[0].strMeal} style = "width:300px;" />

//     </div>`

document.querySelector(".main").innerHTML= data.map((d)=>
`
<div>
<h1>${d.strMeal}</h1>
<img src= ${d.strMealThumb} alt = ${d.strMeal} style = "width:300px;" />
</div>
`)
}
showDataToDom();