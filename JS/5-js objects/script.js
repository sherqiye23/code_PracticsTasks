function Product(id, name, price) {
    this.id = id,
    this.name = name,
    this.price = price
};

function Milk(id, name, price, FatPercent, MadeIn) {
    Product.call(this, id, name, price)
    this.FatPercent = FatPercent,
    this.MadeIn = MadeIn
};

Object.setPrototypeOf(Milk.prototype, Product.prototype);


let product1 = new Milk(1, "Milla", 2, 1, "Georgia");
let product2 = new Milk(2, "AzərSüd", 5, 10, "Azerbaijan");
let product3 = new Milk(3, "Sütaş", 8, 20, "Turkey");

let products = [];
products.push(product1, product2, product3)

// 1
// let product = products.forEach(x=>console.log(x))

// 2
let id = products.filter(value => value.id == 1)
// console.log(id);


// 3
function FatAverage(array) {
    let fatAverage = array.reduce((total, value) => {
        return total + value.FatPercent
    },0);
    return fatAverage/products.length;
}
// console.log(FatAverage(products));


// 4
function Percent(array) {
    let percent = array.filter(value => value.FatPercent > 3);
    return percent;
}
// console.log(Percent(products));


// 5
function changePrice(array, num) {
    let change = array.map(value => value.price + num);
    return change;
}
// console.log(changePrice(products, 10));


// 6
function priceSum(array) {
    let sum = array.reduce((total, value) => {
        return total + value.price;
    },0)
    return sum;
}
// console.log(priceSum(products));


// 7
function productID(array) {
    let id = array.find(value => value.id == 1);
    return id;
}
// console.log(productID(products));


// 8
function expensiveProduct(array) {
    let expensive = array.toSorted((a,b) => b.price - a.price);
    return expensive[0].name;
}
// console.log(expensiveProduct(products));


// 9
// 1ci usul
function difference1(array) {
    let expensive = array.toSorted((a,b) => a.price - b.price);
    let difference = expensive[expensive.length-1].price - expensive[0].price;
    return difference;
}
// console.log(difference1(products));


// 2ci usul
function difference2(array) {
    let expensive1 = array.toSorted((a,b) => a.price - b.price);
    let expensive2 = array.toSorted((a,b) => b.price - a.price);
    let difference = expensive2[0].price - expensive1[0].price;
    return difference;
}
// console.log(difference2(products));



// 10

// 1ci usul
// const made = (value) => value.MadeIn == "Azerbaijan";
// console.log(products.some(made));


// 2ci usul
let made = products.filter(value => value.MadeIn.includes("Azerbaijan"));
console.log(made);

