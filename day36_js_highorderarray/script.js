// const arr = [10,20,30,40,50];
// console.log(arr.includes(21));

// const phones =["apple","lenovo", "dell inspiration","xiaomi","HP","oppo"]
// const searchElement="Apple"
// console.log(phones.includes(searchElement.toLowerCase()));

//High Order Arrays Method------>>>>>
// const arr = [10,20,30,40,50]
// const result = arr.map((elements)=> elements+'20')//if string converts the number into then it is called type quartion
// const numberQartion= arr.map((elements)=> elements-'20')
// console.log(result)
// console.log(numberQartion)
// const arr=[10,20,30,40,50]
// arr.map((e)=>console.log(e))

//filter method------>>>>>>>>>>>>>>>>
// const arr =[10,20,30,40,50];
// const filteredData=arr.filter((superman)=>superman>30);
// console.log(filteredData);
const products = [{
    id:1,
    title:'iphone 14',
    category:"mobiles",
    price:69999,
},
{
    id:2,
    title:'Oneplus 12',
    category:"mobiles",
    price:29999,
},
{
    id:3,
    title:'lenovo ideapad',
    category:"laptops",
    price:55555,
},
{
    id:4,
    title:'HP pavilion',
    category:"laptops",
    price:49999,
},
{
    id:5,
    title:'microsoft surface',
    category:"tablets",
    price:89999,
},
{
    id:6,
    title:'ipad',
    category:"Tablets",
    price:99999,
}

];
// filterSearch="tablets"
// const filterByCategory= products.filter((product)=>product.category.toLowerCase()==filterSearch.toLowerCase());
// console.log(filterByCategory)
// filterSearch>=59999;
// const filterByPrice=products.filter((data)=>data.price>=59999);
// console.log(filterByPrice)
const filterByTitle = products.filter((data)=>data.title.toLowerCase().includes("i"));
console.log(filterByTitle)