// Bank kredit melumatlarinin hesablanmasi ;

// Girishde 3 shey teleb olunur : (prompt kimi qəbul edib, dəyişənə mənimsədin);

// 1. emek haqqi
// 2. istediyiniz meblegh
// 3. istediyiniz muddet (ay)

// Maksimal muddet 36-aydir ( eger cox olarsa 'size bu shertlerle kredit dushmur' alert olaraq ve konsolda error olaraq) 


// Faiz derecesi 

// 0-12 ay - illik 13 % 0.13
// 12-24 ay - illik 15% 0.15
// 24-36 ay - illik 17% 0.17

// Maksimal kredit meblegi emek haqqinin 10 misli ola biler  ( eger cox olarsa 'size bu shertlerle kredit dushmur')

// ayliq odenish emek haqqinin 45 % innen cox olmamalidir  ( eger cox olarsa 'size bu shertlerle kredit dushmur')

// cixishda ( misal ucun : 3000 azn mebleg size 15%le 16 ay muddetine  ayliq 345 manat odenishle veririlir ) stringe menimsedin ve alert olaraq çıxardın


let emekHaqqi = Number(prompt("emek haqqini daxil edin"))
let meblegh = Number(prompt("meblegh daxil edin"))
let muddet = Number(prompt("muddeti daxil edin (ay olaraq)"))

let ayliqOdenish

if (muddet <= 36 && muddet > 0) {

    if (muddet > 0 && muddet <= 12) {
        ayliqOdenish = (meblegh*(1 + 0.13))/muddet
        if (emekHaqqi > meblegh*10) {
            alert("size bu shertlerle kredit dushmur")
        } else if (ayliqOdenish >= emekHaqqi * 0.45) {
            alert("size bu shertlerle kredit dushmur")
        } else {
            alert(`${meblegh} azn meblegh size 13% ile ${muddet} ay muddetine ayliq ${ayliqOdenish} manat odenishle veririlir`)
        }
    } 
    
    else if (muddet > 12 && muddet <= 24) {
        ayliqOdenish = (meblegh*(1 + 0.15))/muddet
        if (emekHaqqi > meblegh*10) {
            alert("size bu shertlerle kredit dushmur")
        } else if (ayliqOdenish >= emekHaqqi * 0.45) {
            alert("size bu shertlerle kredit dushmur")
        } else {
            alert(`${meblegh} azn meblegh size 15% ile ${muddet} ay muddetine ayliq ${ayliqOdenish} manat odenishle veririlir`)
        }
    } 
    
    else if (muddet > 24 && muddet <= 36) {
        ayliqOdenish = (meblegh*(1 + 0.17))/muddet
        if (emekHaqqi > meblegh*10) {
            alert("size bu shertlerle kredit dushmur")
        } else if (ayliqOdenish >= emekHaqqi * 0.45) {
            alert("size bu shertlerle kredit dushmur")
        } else {
            alert(`${meblegh} azn meblegh size 17% ile ${muddet} ay muddetine ayliq ${ayliqOdenish} manat odenishle veririlir`)
        }
    }
} 


else if (muddet >= 36){
    alert("size bu shertlerle kredit dushmur")
    console.error("size bu shertlerle kredit dushmur")
} else {
    alert("duzgun ay daxil edin")
}






