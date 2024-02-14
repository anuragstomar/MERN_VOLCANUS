// let arr = [10,20,30,40,50];
// //it will update the orginal array and it did not create the new array
// // arr.splice(1,2)
// console.log("original array",arr)
// //slice return a brand new array , we have to pass the start end indext of element, it will exclude the last index.
// let slicedArray = arr.slice(2,4)
//  console.log("slideArray",slicedArray)
//  console.log("original array",arr)
// let arr1 =["laptops","smartphones","smartwatch","ipad"];
// let arr2= ["orange","banana","cherry","mango"];
// // console.log(arr1.concat(arr2));
// let result = arr1.concat(arr2);
// console.log("new array after combining both the arr is:-",result)

const arr= ["orrange","banana","apple","mango","apple"];
console.log("Index of searching element="+arr.indexOf("apple"));
const searchingElement="Apple"

console.log("Index of searching element="+arr.lastIndexOf("apple"));
(searchingElement.toLowerCase())