// 2
// 2 ededin max'i

// function sum(a, b) {
//     if (a > b) {
//         return `${a} ededi boyukdur`
//     } else if (a < b) {
//         return `${b} ededi boyukdur`
//     } else {
//         return "her ikisi de beraberdir"
//     }
// }

// console.log(sum(7, 5))

// 3 
// 1-dən n-ə Qədər Cəmi. 1-dən n-ə qədər olan ədədlərin cəmini qaytaran bir funksiya yaradın. for döngüsünü istifadə edin

// function sumFunction(n) {
//     sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }

// console.log(sumFunction(9))


// 4
//  Tək və Cüt ədədlər. Verilmiş bir ədədin tək və ya cüt olduğunu müəyyən edən bir funksiya yaradın

// function myFunc(a) {
//     if (a % 2 == 0) {
//         return `${a} ededi cutdur`
//     } else {
//         return `${a} ededi tekdir`
//     }
// }

// console.log(myFunc(6))


// 5 
//  Faktorial Hesabı. Verilmiş bir ədədin faktorialını hesablayan bir funksiya yaradın. for döngüsünü istifadə edin.


// function faktorial(n) {
//     hasil = 1;
//     for (let i = 1; i <= n; i++) {
//         hasil *= i
//     }
//     return `${n} ededinin faktoriali ${hasil}-dir`
// }

// console.log(faktorial(10))


// 6
//  Nömrələrin Tersinə. Bir ədədin tərsini qaytaran bir funksiya yaradın (məsələn, 123 -> 321).

// function tersEded(n) {
//     let str = String(n)
//     let ters = ""
//     for (i = str.length-1; i >= 0; i--) {
//         ters += str[i]   
//     }
//     return ters
// }

// console.log(tersEded(570))


// 7
// N-ə Qədər Cüt ədədlər. 1-dən n-ə qədər olan cüt ədədləri çap edən bir funksiya yaradın.

// function cutEdedler(n) {
//     for (i = 1; i <= n; i++) {
//         if (i % 2 == 0) {
//             console.log(i)
//         }
//     }
// }

// cutEdedler(23)



// 8
// FizzBuzz 1-dən 100-ə qədər olan ədədlər üçün FizzBuzz problemi: 3-ə bölünəndə "Fizz", 5-ə bölünəndə "Buzz", hər ikisinə bölünəndə "FizzBuzz" yazın



// 9 
// Polindrom Yoxlanması. Verilmiş bir sözün polindrom olub olmadığını yoxlayan bir funksiya yaradın.

// function tersSoz(str) {
//     let ters = ""
//     for (i = str.length-1; i >= 0; i--) {
//         ters += str[i]   
//     }

//     if (ters === str) {
//         console.log("Polindrom sozdur")
//     } else {
//         console.log("Polindrom soz deyil")
//     }
// }
// tersSoz("hello")


// 10
// 1-dən n-ə Qədər ədədlərin Kvadratı. 1-dən n-ə qədər olan ədədlərin kvadratlarını çap edən bir funksiya yaradın.

// function funksiya(n) {
//     for (let i = 1; i <= n; i ++) {
//         let a = i;
//         a *= i
//         console.log(a);
//     }
// }

// funksiya(3)


// 11
// İki Dəfə Yoxlanma. Verilmiş bir ədədin 2, 3 və 5-ə bölünüb-bölünmədiyini yoxlayan bir funksiya yaradın

// function bolme(n) {
//     if (n % 2 == 0 && n % 3 == 0 && n % 5 == 0) {
//         console.log("Bu eded 2, 3 ve 5-e bolunur");
//     } else {
//         console.log("Bu eded 2, 3 ve 5-e bolunmur");
//     }
// }

// bolme(1)


// 12
// array-in Cəmi Bir array içindəki ədədlərin cəmini hesablayan bir funksiya yaradın.

// function arraySum() {
//     let myArray = [1, 4, 2, 90];
//     let sum = 0;
//     for (i = 0; i < myArray.length; i++) {
//         sum += myArray[i]
//     }
//     console.log(sum)
// }

// arraySum()


// 13
// Tərs Array Bir array-i tərsinə çevirən bir funksiya yaradın.


// 14
// Fibonacci Nömrələri. Verilmiş n-ə qədər Fibonacci ədədlərini çap edən bir funksiya yaradın
// 0, 1, 0+1, 1+1, 2+1, 3+2, 5+3 ilk reqemle 0ve1 sonra ozunden evvelki ile toplamaq lazimdir


// let a = 0;
// let b = 1;
// let array = [];

// for (i = 0; i < 5; i++) {
//     a += b
//     b += a
//     array.push(a)
//     array.push(b)
// }
// console.log(array);


// function fibonacci(n) {
//     let a = 0;
//     let b = 1;
//     let array = [];

//     for (i = 0; i < n/2; i++) {
//         a += b
//         b += a
//         array.push(a)
//         array.push(b)
//     }
//     console.log(array);
//     console.log(array[n-1]);
// }

// fibonacci(2)

// let n = 10;
// let fibo = [0, 1];
// console.log(fibo[3])
// for (let i = 2; i < n; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }

// console.log(fibo)


// let str1="salam", str2=" dunya"
// console.log(str1,str2)
// console.log(str1+str2)
