// 1. Verilmiş bir array-də ədədlərin yerini dəyişdirərək,cüt ədədləri əvvələ, tək ədədləri isə axıra yerləşdirin.
// let arr = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12];

// let cut = [];
// let tek = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         cut.push(arr[i]);
//     } else {
//         tek.push(arr[i]);
//     }
// }

// console.log(cut.concat(tek));   

// 2. Bir array-dəki ən kiçik və ən böyük ədədləri tapın,sonra bu ədədləri array-dən silin.

// let newArr = arr.toSorted((a,b) => a-b);
// newArr.pop();
// newArr.shift();
// console.log(newArr);

// let arr = [32, 25, 85, 89, 45, 76, 7, 41, 2, 12, -5];

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }

// let index1 = arr.indexOf(max);
// arr.splice(index1, 1);

// let min = max;
// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }

// let index2 = arr.indexOf(min);
// arr.splice(index2, 1);
// console.log(arr);

// 3.Bir array verilir. Bu arrayin daxilindəki unikal(təkrarlanmayan) elementləri tapın və yeni bir array-də cəmləyərək qaytarın.

// let array = [32, 25, 85, 89, 45, 76, 7, 25, 89, 7, 7] // 32 85 45 76
// let newArray1 = [];
// let newArray2 = [];

// for (let i = 0; i < array.length; i++) {
//     if (!(newArray1.includes(array[i]))) {
//         newArray1.push(array[i])
//     } else {
//         newArray2.push(array[i])
//     }
// }
// console.log(newArray1);
// console.log(newArray2);

// let unique = newArray1.filter(value => !newArray2.includes(value))
// console.log(unique);

// let sum = unique.reduce((total, value) => total + value, 0)
// console.log(sum);



// 4.Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

function findChar(string, char) {
    sum = 0;
    let newstr = string.split("")
    for (let i = 0; i < newstr.length; i++) {
        if (char === newstr[i]) {
            sum += i
        }
    }
    return sum
}
// console.log(findChar("salam", "a"));


// 5.Bir mətn verilir. Mətnin içərisindəki sözlərin sayını tapın və hər bir sözün daxilindəki hərf sayını ayrıca hesablayın. Sonra, ən uzun sözü və onun hərf sayını ekrana çap edin.

// let words = "Azerbaycan Texniki Universiteti";
// let array = words.split(" ")
// console.log(`metnin icindeki sozlerin sayi ${array.length}`);

// for (let i = 0; i < array.length; i++) {   
//     console.log(`${array[i]} sozunun uzunlugu ${array[i].length}`);
// }

// let max = 0;
// let result;
// for (let j = 0; j < array.length; j++) {
//     if (array[j].length > max) {
//         max = array[j].length;
//         result = array[j]
//     }
// }
// console.log(`en uzun soz ${result} sozudur ve onun uzunlugu ${result.length}-dir`);



// 6.const arr1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y","u"];
// Verilən 'arr1' adlı array-dən təsadüfi bir hərfi qaytaran bir JavaScript funksiyası yazın.
const arr1 = ["a", "b", "c", "d", "e", "f", "j", "k", "y", "u"];
// console.log(arr1.at(Math.floor(Math.random() * arr1.length)));


// 7.Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir. Və daxil olunmuş indeksə əsasən göndərilmiş string-i həmin array-ə əlavə edib return etsin. Məsələn arqument olaraq - ['a','salam','b','world'], 3, "dev" göndərilərsə o zaman dev string-ini 3cu indekse elave etmelidir, eger gonderilmish indeks array-in uzunlugundan boyuk olarsa o zaman hemin string array-in en sonuna elave edilsin.
function findIndexChar(array, index, string) {
    if (index > array.length) {
        array.push(string);
    } else {
        array.splice(index, 0, string)
    }
    return array;
}
// console.log(findIndexChar(['a','salam','b','world'], 1, "dev"));


// 8.İstifadəçidən bir array daxil etməsini istəyin. Bu arrayin daxilindəki ədədlərin kvadratlarını tapın və bu kvadratların cəmini hesablayın. Daha sonra, bu cəmi 2-yə bölün və bu ədədi ekrana çap edin.
function hesablama(array) {
    let kvadrat = array.map(value => value**2);
    let sum = kvadrat.reduce((total, value) => total+value ,0)
    return sum/2
}
// console.log(hesablama([1, 2, 3, 4, 5]));


// her telebenin pointini 30 bal artirin
const students = [
    { name: "Leyla", points: 500 },
    { name: "Akif", points: 500 },
    { name: "Fikret", points: 3000 },
    { name: "Rashad", points: 500 },
    { name: "Turkan", points: 1900 },
    { name: "Sabir", points: 1000 },
    { name: "Idris", points: 340 },
    { name: "Nijat", points: 940 },
    { name: "Ismet", points: 1780 },
];

for (let i = 0; i < students.length; i++) {
    students[i].points += 30;
}
console.log(students);

