import {url} from "./baseUrl.js";
import {PostUser, GetUsers} from "./Request/requests.js"

//login
let loginEmail = document.querySelector("#login-email");
let loginPassword = document.querySelector("#login-password");
let loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    GetUsers(url).then(res => {
        console.log(res.data);
        const data = res.data;
        let findedUser = data.find(user => user.email == loginEmail.value && user.password == loginPassword.value);
        if (findedUser){
            localStorage.setItem("userInfo", JSON.stringify(findedUser.id));
            window.location.href = "./main.html"
        }
        else {
            alert("Belə bir istifadəçi mövcud deyil") 
        }  
    })
})
