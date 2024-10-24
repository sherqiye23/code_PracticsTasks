// polindrom eded

let number = String(1221)
let array = []

for (i=0; i<number.length; i++){
    array.push(number[i])
}
// console.log(array)      [ '1', '2', '2', '1' ]

let reversed = array.reverse()
// console.log(reversed)   [ '1', '2', '2', '1' ]

let reversedStr = reversed.join("")
// console.log(reversedStr)   "1221"


if (number == reversedStr) {
    console.log("polindromdur")
} else {
    console.log("polindrom deyil")
}


