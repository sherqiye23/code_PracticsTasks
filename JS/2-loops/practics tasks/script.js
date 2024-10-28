// 1.  Console-da ad yaz
// 2. 1-dən 10 və 100ə qədər ədədləri yazdır( həmçinin indeksini göstər.) (həmçinin 3-3 artıraraq yaz.)

// 1den 10a qeder


// for (let i=10; i>0; i--) {
//     console.log(i)
// }

// 3. geriden yazdir
// 4. 1-dən 100-ə qədər ancaq cütlər

// 12. Stringlərdə hansısa hərfin tapılması

// let string = "Salam"
// for (i=0; i < string.length; i++) {
//     if (string[i].toLowerCase() == "l") {
//         console.log(i, string[i])
//     }
// }



// 13. Stringlərdə neçə dənə sait olması.(iki forlu nümunədir.)


// 14.Bir funksiya yazın string şəklində bir parametr qəbul etsin. Bu sözün palindrom olub olmamasını tapın.Palintrom tərsdən oxunduqda da eyni olan sözlərə deyilir.

// function palindrom(str) {}


// 15. Arraylərdə elementi tək-tək yazdırmaq.
// let array = [1, 2, 3, 4, 5]
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// 16. Geridən yazdırmaq.
// let array = [1, 2, 3, 4, 5]
// for (i = array.length - 1; i >= 0; i--) {
//     console.log(array[i])
// }

// 17. Tək yerdə daynanlarla cüt yerdə dayananların hasilini tapmaq.
// let num = 12345;
// let numStr = String(12345);
// let tekler = 0;
// let cutler = 0;


// for (let i = 0; i < numStr.length; i++) {
//     if (i % 2 == 0){
//         tekler += Number(numStr[i])
//     }

//     if (i % 2 == 1){
//         cutler += Number(numStr[i])
//     }
// }
// console.log(tekler)
// console.log(cutler)

// console.log(tekler*cutler);




// 18. Arraydəki ən böyük və ən kiçik elementi tapmaq (2 forlu nümunə)
// let array = []






// 19. Arraydəki ədədlərin ədədi ortasını tapmaq.

// let array = [1, 2, 3, 4, 5, 6];
// let cem = 0;
// let edediOrta;

// for (let i = 0; i < array.length; i ++) {
//     cem += Number(array[i]);
// }

// edediOrta = cem / array.length
// console.log(edediOrta);






// 20. Arraydəki elementlərdən cüt olanların sayını tapmaq.

// let array = [1, 2, 3, 4, 5, 6];
// let count = 0;


// for (let i = 0; i < array.length; i ++) {
//     if (array[i] % 2 == 0) {
//         count +=1
//     }
// }
// console.log(count)





// let i = 6;

// do {
//     console.log(i);
//     i+=1
// } while (i<5)

// let i = 6;

// while (i<5) {
//     console.log(i);
//     i+=1
// }


