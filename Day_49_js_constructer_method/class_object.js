class Car{
    constructor(brandName, price , color){
        this.brandName = brandName
        this.price = price
        this.color = color
    }


display() {
console.log(`the Car BrandName = ${this.brandName} and price = ${this.price} and color = ${this.color}`)
}
}
class BMW extends Car {
constructor (brandName, price , color,wheels , power){
    super(brandName, price , color)
    this.wheels = wheels;
    this.power = power;
}
displayBMW(){
    // this.display();
    console.log(`the Car BrandName = ${this.brandName} and price = ${this.price} and color = ${this.color}  & wheels are ${this.wheels}, aur power hai ${this.power}`);
}
}
// const c1 = new Car ('BMW',454584512,"blue")
// c1.display();
const c2 = new BMW('BMW',454584512,"blue",23226,612)
c2.displayBMW();
