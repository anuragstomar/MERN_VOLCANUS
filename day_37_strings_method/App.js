//toUpperCase------->>>>>>>
// const str = "superman";//we cannot change the real string because strings are immutable in javascript.
// const resultStr= str.toUpperCase()
// console.log(str.toUpperCase());
// console.log(resultStr);

//toLowerCase-------->>>>>>>>
// const str = "SUPERMAN"
// console.log(str.toLowerCase());

//trim------>>>>>>>
// const str = "Superman belongs from DC"
// console.log(str.trim())

//charAt------>>>>>>>
// const str = "Superman"
// const testStr= str.charAt(0)
// // console.log(str.charAt(4))
// console.log(testStr)


//indexOf-------->>>>>>>>
// const str="Ram Sharma";
// console.log(str.indexOf("h"));
// const str ="ram Sharma";
// let targetStr = "m";
// let firtsOcu;
// let lastOcurr;
// for( let i = 0; i<str.length; i++)
// {
//     if (firtsOcu == 0 && str.charAt(i)=== targetStr){
//         firtsOcu=i;
//     }else if (str.charAt(i)=== targetStr){
//         //if(str[i] == targetStr)
//         //firstOcu = i;
//         lastOcurr = i;
//         //break;
//     }
//     console.log(firtsOcu);
//     console.log(lastOcurr);
// }

//replace method------>>>>>>>>
// const str = "superman"
// const result = str.replace('u','U');
// console.log("brand new string = ", result);
//priting table in the terminal------>>>>>>
// const car ={
//     brand:'BMW',
//     price:'$54522',
//     headlight: 4,
//     wheels: 10,
// }
// console.log(car);
// console.table(car);

//split method------>>>>>
// const str = "superman is belong to DC";
// console.log(str.split(' '));

//how to find capital & small letter words in the string----->>>>>>>

// const str = "superman is belong to DC SPIDERMAN";
// const result = str.split(' ');
// console.log(result);
// for(let i=0;i<result.length;i++){
//     let temp = result[i];
//     if(temp.toUpperCase()===result[i]){
//         console.log("upperCAse words", result[i]);
//     }
//     else{
//         console.log("lowerCase words ", result[i]);
//     }
// }

//slice method---->>>>>>"khud se krna hai".

// const str1 = "Superman";
// console.log(str1.slice(2,5));
//substring method------>>>>>>>>
// const  str2 = "Superman";
// console.log(str2.substring(2,5));


//concat method ----->>>>>khud se krna hai.





