// 4cu sual
// Daxil edilən 1-12 arasındakı müsbət rəqəmlərdən hər hansı birinə uyğun olan ayın adını yazan proqram yazın. Məsələn 2 daxil edilsən Fevral yazılmalıdır.(switch ilə yazılmalıdır.)

let num = Number(prompt("eded daxil edin"))

switch(num) {
    case 1:
        console.log("Yanvar")
        break;

    case 2:
        console.log("Fevral")
        break;

    case 3:
        console.log("Mart")
        break;

    case 4:
        console.log("Aprel")
        break;

    case 5:
        console.log("May")
        break;

    case 6:
        console.log("Iyun")
        break;

    case 7:
        console.log("Iyul")
        break;

    case 8:
        console.log("Avqust")
        break;
    
    case 9:
        console.log("Sentyabr")
        break;
    
    case 10:
        console.log("Oktyabr")
        break;
    
    case 11:
        console.log("Noyabr")
        break;
    
    case 12:
        console.log("Dekabr")
        break;


    default:
        console.log("zehmet olmasa 1-12 araliginda eded daxil edin")
}


// 7ci sual
// Daxil edilən 2 ədədin hasilinin müsbət yoxsa mənfi ədəd olmasını göstərən funksiya yazın.

let num1 = Number(prompt("1ci ededi daxil edin"))
let num2 = Number(prompt("2ci ededi daxil edin"))

let result = num1 * num2

if (result > 0) {
    console.log(`daxil etdiyiniz ${num1} ve ${num2} ededlerinin hasili musbetdir`)
} else if (result = 0) {
    console.log(`daxil etdiyiniz ${num1} ve ${num2} ededlerinin hasili 0-a beraberdir`)
} else {
    console.log(`daxil etdiyiniz ${num1} ve ${num2} ededlerinin hasili menfidir`)
}



// 10cu sual
// Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın. 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F". Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır.

let x = Number(prompt("zehmet olmasa balinizi daxil edin"))

if (x>=91 && x<=100) {
    console.log("A")
} else if (x>=81 && x<=90) {
    console.log("B")
}else if (x>=71 && x<=80) {
    console.log("C")
}else if (x>=61 && x<=70) {
    console.log("D")
}else if (x>=51 && x<=60) {
    console.log("E")
}else if (x>=0 && x<= 50) {
    console.log("F")
} else {
    console.log("balinizi duzgun daxil edin")
}
