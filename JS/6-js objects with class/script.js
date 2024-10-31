class Product{
    constructor(id, name, price){
        this.id = id,
        this.name = name,
        this.price = price
    }
}

class Milk extends Product{
    constructor(id, name, price, fatPercent, madeIn){
        super(id, name, price);
        this.fatPercent = fatPercent,
        this.madeIn = madeIn
    }
}


let product1 = new Milk(1, "Milla", 2, 5, "Azerbaijan");
let product2 = new Milk(1, "Athena", 3, 8, "Turkiye");

let products = [];
products.push(product1, product2);
console.log(products);



