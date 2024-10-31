class Device {
    constructor(brand, model, screenSize, batteryLevel, price, saleCount, salePrice) {
        if (price > salePrice) {
            throw new Error("Invalid error")
        }

        this.brand = brand,
            this.model = model,
            this.screenSize = screenSize,
            this.batteryLevel = batteryLevel,
            this.price = price,
            this.saleCount = saleCount,
            this.salePrice = salePrice // (satış qiyməti maya dəyərindən hər zaman daha böyük olmalıdır)
    }
    // methods
    // bu method isə həmin device-ın satışından əldə edilən gəliri hesablayacaq.Əgər məhsul ziyana satılarsa o zaman nə qədər ziyan etdiyini göstrəcək.
    CalculateProfit() {
        return (this.salePrice - this.price) * this.saleCount
    }
    // bu method isə device-ın hazırdakı battereyasını göstərəcək
    DisplayBatteryLevel() {
        return this.batteryLevel
    }
    //  bu mehtod isə device haqqında detalları yazacaq (screensize,model,brand,)
    DisplayDetails() {
        return `Screen Size ${this.screenSize} \n Model ${this.model} \n Brand ${this.brand}`
    }
}


// Bir Phone class-ı yaradırsınız. Device class-ından miras alır və əlavə olaraq, isSmart deyeri var (true false deyerleri olur)
// Bir Laptop class-ı yaradırsınız. Device class-ından miras alır və əlavə olaraq, isRGBkeyboard deyeri var (true/false)
class Phone extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, saleCount, salePrice, isSmart) {
        super(brand, model, screenSize, batteryLevel, price, saleCount, salePrice);
        this.isSmart = isSmart
    }
}

class Laptop extends Device {
    constructor(brand, model, screenSize, batteryLevel, price, saleCount, salePrice, isRGBkeyboard) {
        super(brand, model, screenSize, batteryLevel, price, saleCount, salePrice);
        this.isRGBkeyboard = isRGBkeyboard
    }
}

// Phone və Laptop class-larından istifadə edib bir neçə product yaradın və products array-inə yığın. Və global-da aşağıdakı function-ları yazın.
// let product1 = new Phone("Iphone", "Iphone14", 6.06, 100, 600, 1000, 700, true)
let products = [];

try {
    let product1 = new Phone("Iphone", "Iphone14", 6.06, 100, 600, 1000, 700, true);
    let product2 = new Phone("Samsung", "S24 Ultra", 6.8, 100, 1200, 2000, 1500, true);
    let product3 = new Phone("Honor", "X8", 6.7, 100, 100, 500, 150, true);
    let product4 = new Laptop("ASUS", "ROG strix g15", 15.6, 100, 1000, 1500, 1500, true);
    let product5 = new Laptop("Macbook", "Macbook Pro 14", 14.2, 100, 2000, 2000, 2500, true);
    let product6 = new Laptop("Lenovo", "Legion 9", 16, 100, 2000, 1000, 2300, false);
    products.push(product1, product2, product3, product4, product5, product6);
    // console.log(products)

} catch (err) {
    console.log(err)
}

// 1
// FilterbyPrice - parametr olaraq array və price deyerleri qebul edir. Gonderilmish array-də price-ı göndərilmiş price-dan yuxarı olan product-ların name-lərini qaytarın.
function filterByPrice(array, newPrice) {
    let filterPrice = array.filter(value => value.price > newPrice);
    filterPrice.forEach(element => console.log(element.model));
}
// filterByPrice(products, 1200)


// 2
// FilterbyName - parametr olaraq bir array və name deyerleri qebul edir və gonderilen name-e esasen hemin name-de olan product-ların sayını qaytarır. (Məsələn products array-i və "Iphone" gonderilerse name-i Iphone olanlarin sayini qaytarmalidir)
function filterByName(array, name) {
    let filterName = array.filter(value => value.brand == name);
    console.log(filterName.length);
}
// filterByName(products, "Iphone")


// 3
//  GetTotalProfit - parametr olaraq bir array qebul edir ve hemin array-deki product-larin umumi profitini (gelirini) qaytarir.
function getTotalProfit(array) {
    let profit = array.reduce((total, value) => {
        // return total + ((value.salePrice - value.price) * value.saleCount)
        return total + value.CalculateProfit()
    },0);
    return profit
}
console.log(getTotalProfit(products));