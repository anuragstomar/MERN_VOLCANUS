//console.log("hello console")

// const heros = {
//     name: 'superman',
//     age:400,
//     salary:49000,
//     anuraag: function(){
//         return this;
//     }
// };
// console.log(this);
// console.log(heros);

// const p = new Promise();
// //case date
// const date = new date();
// //constructer fuc  tiuon

function Product (name,price,quentity){
    this.name = name,
    this.price = price
    return this
    
}
// console.log(product ('macbook',125422,2))
const p1 = new Product ('macbook',125422,2);
const p2 = new Product ('hp- ibook',749,1);
Product.prototype.brandName = "apple";
Product.prototype.quentity= "30";
Product.prototype.price=30;
Product.prototype.sale= function (){
    return 20;
}

console.log(p1.brandName,p1.price);
console.log(p1.sale());
console.log(p1);
console.log(p2);