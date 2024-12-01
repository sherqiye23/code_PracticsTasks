import {PostElements, GetElements} from "./Requests/requests.js"
import { localHostUrl } from "./baseurl.js";


let regForm = document.querySelector("#regForm");
let regName = document.querySelector("#regName");
let regEmail = document.querySelector("#regEmail");
let regPassword = document.querySelector("#regPassword");


regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    GetElements(localHostUrl+"users").then(res => {
        const data = res.data;
        let findMail = data.find(value => value.email == regEmail.value);
        if (findMail) {
            alert("Bu mail ilə giriş edilib!")
        } else {
            let newUser = {
                username: regName.value,
                email: regEmail.value,
                password: regPassword.value,
                isAdmin: false,
                favorites: [],
                baskets: []
            }
            PostElements(localHostUrl+"users", newUser).then(()=>{});
            alert("Siz uğurla qeydiyyatdan keçdiz!");
            window.location = "./login.html"
        }
        
    })
})






