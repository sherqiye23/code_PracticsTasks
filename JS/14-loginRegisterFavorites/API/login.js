import { GetElements } from "./requests/requests.js"
import { localHostUrl } from "./url.js";


let loginForm = document.querySelector("#loginForm");
let email = document.querySelector("#email");
let password = document.querySelector("#password");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    GetElements(localHostUrl+"users").then(res => {
        const data = res.data;
        let findUser = data.find(value => value.email == email.value && value.password == password.value);
        if (!findUser) {
            alert("Belə bir istifadəçi tapılmadı!")
        } else {
            localStorage.setItem("userInfo", JSON.stringify(findUser.id));
            window.location.href = "./main.html"
        }
        
    })
})

