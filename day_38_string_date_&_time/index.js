const date = new Date();
const currentDate = date.getDate();
const currentDay = date.getDay();
const year = date.getFullYear();
const month = date.getMonth()+1;
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

// console.log(date.getDate());
console.log(`today date is= ${currentDate}-${month}-${year}`)
console.log(`today tim e is= ${hour}-${minute}-${second}`)
