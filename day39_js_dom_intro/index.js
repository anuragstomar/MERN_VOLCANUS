// console.log("hello console")
// const element1 = document.getElementsByTagName('h1');
// const element2 = document.getElementById('h2');
// const element3 = document.getElementsByClassName('h3');


// const element1 = document.querySelectorAll("h1");
// const element2 = document.querySelector("#h2");
// const element3 = document.querySelector(".container")
// console.log("this is element 1",element1)
// console.log("this is element 2",element2)
// console.log("this is element 3",element3)

// const element = document.querySelector(".container")
// element.innerHTML = "<h1> this is my innerHTML text</h1>"
// element.innerText = "this is  my text"

// const h1 = document.querySelector("h1");
// console.log(h1.innerText);

// document.querySelector('.container').innerHTML = `<h1>${h1.innerText}</h1>`
// const image = document.querySelector('img');
// image.src = "https://cdn.pixabay.com/photo/2023/10/14/09/20/mountains-8314422_960_720.png";


// const element = document.querySelector("h1")
// element.style.backgroundColor = "brown"
// element.style.color = "blue"


// document.querySelector("h1").style.backgroundColor = "yellow"
// document.querySelector("h1").style.color = "blue"


const bgLight = () =>{
const superman = document.querySelector('body');
superman.style.backgroundColor = "white"
superman.style.color = "black"
}

const bgDark= () =>{
    const superman = document.querySelector('body');
    superman.style.backgroundColor = "black"
    superman.style.color = "white"
    }   
    bgDark();
    bgLight();

    const image = () =>{
        const ironman = document.querySelector('img')
        ironman.src = "https://cdn.pixabay.com/photo/2024/02/22/09/04/warehouse-8589487_960_720.jpg"
    }
    const unchange= () =>{
        const ironman = document.querySelector('img')
        ironman.src = "https://cdn.pixabay.com/photo/2024/02/21/08/44/woman-8587090_1280.png"
    }
    
