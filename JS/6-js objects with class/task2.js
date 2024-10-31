// Custom metodlar. 
// Array prototype istifadə edərək 3 custom method yazacıq.
// 1)Custom Map
// 2)Logger (Method init yazılır, array-in hər elementini və indeksini arasına ~ işarəsi qoyaraq  console-a çıxarır (misal üçün. 1 ~ Armud, 2 ~ Alma, Method finished yazılır)
// 3) Ancaq birinci herfleri böyük edən Custom Capitalize methodu.

let myArr = [13, 24, 35, 46, 57]
Array.prototype.myMap = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    return newArray;
}

let mappedArr = myArr.myMap(x => x*3)
console.log(mappedArr);


// 2
// Array.prototype.myLogger = function() {
//     console.log("Method Init");
    
//     for (let i = 0; i < this.length; i++) {
//         console.log(`${i+1} ~ ${this[i]}`);
//     }

//     console.log("Method Finished");
// }
// myArr.myLogger();



// 3
// mystr = "it's snowing like it's the end of the world"
// String.prototype.myCapitalize = function() {
//     let words = this.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toLocaleUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }

// console.log(mystr.myCapitalize());



// let upperC = (char) => {
//     let code = char.charCodeAt(0);

//     if (code >= 97 && code <= 122) {
//         let newChar = String.fromCharCode(code-32)
//         return newChar;
//     }
//     return char 
// }
// console.log(upperC("A"));
