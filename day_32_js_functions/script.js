// //normal function declaration
// function print()
// {
//     console.log("this is a function body");
// }
// print()

// //function with return type
// function sbirateofinterest(){
//     return 7.8
// }
// console.log(sbirateofinterest())

//functions with arguments
// function sum(a,b){
//     console.log("ra.one");
//     return a+b;
// }
// const result = sum(10,20)
// console.log(result)

//arrow function

// function print(){
//     console.log("this is a normal function")
// }
//normal arrow function declaration

// const print2 = () => console.log("this is a arrow function")
// print2()

//arrow function with return value
// const rateofinterest = () => 7.9
// console.log(rateofinterest())

//arrow function with argument and return type
// const sum = (a,b)=>{return a+b}
// console.log(sum(10,20));


//objects------->>>>>>>>>
//spread operator,distructing
const laptop1={
    model_name:"HP pro book 830 G8",
    brand_name:"HP",
    ram:"10GB",
    HHD:"500GB",
    SSD:"300GB",
    Processor:"Intel i-9 9th Gen",
    Price:75000
};
// console.log("laptop1objects",laptop1)
//distructure
const{ram,SSD}=laptop1
console.log(ram,SSD)
//spreadoperator
// const laptop2={...laptop1,Price:1000,}
// console.log("laptop2 objects",laptop2)


