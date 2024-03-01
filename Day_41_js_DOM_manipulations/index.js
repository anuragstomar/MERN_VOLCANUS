// const element = document.querySelector(".container")

//childnodes----->>>>>
// console.log(element.childNodes);


//children----->>>>>
// console.log(element.children[0])


//firstelementchild----->>>>
// console.log(element.firstElementChild)

//lastElementChild----->>>>
// console.log(element.lastElementChild.innerHTML)


// const child2 = document.querySelector('.child2');

// console.log(child2.innerHTML);

// console.log(child2.previousElementSibling.innerHTML);

// console.log(child2.nextElementSibling.innerHTML)

//create element using dynamic script---->>>> 
const button = document.createElement('button');




button.innerText = 'dynamic button'
button.setAttribute('class','btn')
document.querySelector('body').appendChild(button)


const div = document.createElement('h1');
// div.className = "superman";
div.setAttribute('class','superman');
div.setAttribute('id','batman')

div.innerText = 'this is my dynamic div';


div.style.backgroundColor = "purple"

console.log("this is my div",div);
console.log("div text=",div.innerText);

document.querySelector('body').appendChild(div)



document.querySelector(".btn").addEventListener("click",()=>{
const div = document.createElement('h1');
// div.className = "superman";
div.setAttribute('class','superman');
div.setAttribute('id','batman')

div.innerText = 'this is my dynamic div';


div.style.backgroundColor = "purple"

console.log("this is my div",div);
console.log("div text=",div.innerText);

document.querySelector('body').appendChild(div)
})

document.querySelector(".remove").addEventListener("click",()=>{
const parent = div.parentNode;
console.log("this is parent =", parent)
parent.removeChild(div)
})
