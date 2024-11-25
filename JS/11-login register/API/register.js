import {url} from "./baseUrl.js";
import {PostUser, GetUsers} from "./Request/requests.js"

// register
let registerUsername = document.querySelector("#register-username");
let registerEmail = document.querySelector("#register-email");
let registerPassword = document.querySelector("#register-password");
let registerForm = document.querySelector("#registerForm");


registerForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    if (registerUsername.value != "" && registerPassword.value != "") {
        GetUsers(url).then(res => {
            const data = res.data;
            let findedUser = data.find(user => user.email == registerEmail.value);
            if (findedUser) {
                alert("Bu email artıq qeydiyyatdan keçib");
            } else {
                let newUser = {
                    username: registerUsername.value,
                    email: registerEmail.value,
                    password: registerPassword.value,
                    isAdmin: false,
                    favorites: []
                }
                console.log(newUser);
                
                PostUser(url, newUser).then(()=>{
                    window.location.href = "./login.html"
                })
            }
        })
    } else {
        alert("Düzgün daxil edin")
    }
})


