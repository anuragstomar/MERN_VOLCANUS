console.log("javaScript browser object model:-");

// console.log(window.innerWidth);
// console.log(window.innerHeight);

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;

document.querySelector('.window').innerHTML = `
<h1> Browser innerHeight = ${innerHeight}</h1>
<h1>Browser innerWidth = ${innerWidth}</h1>`

// console.log(window.location)


//href----->>>>
const href = window.location.href
// document.querySelector('.bom').innerHTML = `
// <h1> href = ${href}</h1>`;

//hostname--->>>
const hostName = window.location.hostname;
//origin--->>>>
const origin = window.location.origin;
document.querySelector('.bom').innerHTML= `
<h1> hostname = ${hostName}</h1>
<h1> href = ${href}</h1> 
 <h1>origin = ${origin}</h1>`;