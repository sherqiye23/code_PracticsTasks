// 1
// let arr1 = [1, 2, 3, 4, 5], arr2 = [6, 7, 8, 9]

// console.log(arr1.concat(arr2))
// console.log(arr1 + "," + arr2)


/* 2
Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
console.log(array_filled(6, 0));
Expected Output:
[0, 0, 0, 0, 0, 0] */

// let array = []
// let first = 5, second = 3
// function myfunc(first, second) {
//     for (let i = 0; i < second; i++) {
//         array[i] = first
//     }
//     console.log(array)
// }

// myfunc(first, second)


/* 3
Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
Məsələn:
console.log(move([10, 20, 30, 40, 50], 0, 2)); 0,1,2,3,4   1, 2, 0, 3, 4
Expected Output:
[20, 30, 10, 40, 50] */


// const numbers = [10, 20, 30, 40, 50];
// numbers.splice(0,1)
// numbers.splice(2, 0, 10);
// console.log(numbers);




/* 4
Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.
Məsələn:
console.log(range(1, 4));
Expected Output:
[1, 2, 3, 4] */

// let list = []
// function range(a, b) {
//     let letter = a;
//     for (let i = 1; i <= b-a; i++) {
//         list[0] = a;
//         list[i] = letter+1
//         letter = letter+1
//     }
//     console.log(list)
// }
// range(5, 25)


/* 5
Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.
Məsələn:
console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))
console.log(deleteRepeate([1, 2, 3, 4, 5]))
console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]))

Expected Output:
[1,2,3,4,5]
[1,2,3,4,5]
[1,-2,3,4,-5,-6] */


// let newArray = [];
// let array = [1, 2, 2, 3, 4, 4, 1, 5];
// newArray.push(array[0])
// console.log(newArray);
// for (let i = 1; i < array.length; i++) {
//     for (let f = 0; f < newArray.length; f++) {
//         if (array[i] != newArray[f]) {
//             newArray.push(array[i]);
//         }
//     }
// }

// console.log(newArray);


// function deleteRepeate(arr) {
//     let newArr = [];
//     arr.forEach(element => {
//         if (!newArr.includes(element)) {
//             newArr.push(element)
//         }
//     });
//     return newArr;
// }

// console.log(deleteRepeate([126, 45, 45, 45, 45, 45, 2, 2, 3, 4, 4, 5]));

// ----------------------------------------------------------------------------------------------------------------------------------

/* 12
Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.

sentenceCapitalization("a short sentence")
Expected Output:
"A Short Sentence" */


function sentenceCapitalization(string) {
    let result = string;
    let x = string.toUpperCase(string[0]);
    console.log(x);
    console.log(result);
    console.log(string.slice(1));
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i][0].toUpperCase();
        console.log(arr[i][0].toUpperCase())
        console.log(arr);
    }
    
    
    return string.at(0).toUpperCase() + string.slice(1);
}
let string= "a short sentence";
console.log(sentenceCapitalization(string));



/* 13
Daxil edilən stringi aşağıdakı kimi dəyişdirin.

Replace("5.5.5.5.5")

Expected Output:
5[.]5[.]5[.]5[.]5 */


function Replace(element) {
    element.replace(".", 1)
    console.log(element)
}

Replace("5.5.5.5.5")