let arr = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12]

// a - arrayin butun elementlerini cap edin
// let sual1 = arr.forEach(x => console.log(x))


// b - en boyuk elementi
// let sual2 = arr.toSorted((a,b) => b-a)
// console.log(sual2[0])


// c - push etmek 15i
// arr.push(15)
// console.log(arr);


// d - ilk element silmek
// arr.shift()
// console.log(arr);


// e - sort edib son elementi cap etmek
// let sual5 = arr.toSorted((a,b) => a-b)
// console.log(sual5[sual5.length - 1])


// f - slice ile 3cu indekse 43 elave etmek
// arr.splice(3, 0, 43)
// console.log(arr);


// g - 2ci indexden sonrakilari kes gotur
let sual7 = arr.slice(2)
// console.log(sual7);


// h - foreach
// let sual8 = arr.forEach(x => console.log(x))


// i - 40dan boyukler
let sual9 = arr.filter(value => value > 40)
// console.log(sual9);

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 40) {
        newArr.push(arr[i])
    }
}
// console.log(newArr);





