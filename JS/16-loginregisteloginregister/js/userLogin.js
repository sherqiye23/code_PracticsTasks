import { baseUrl } from "./Requests/baseUrl.js";
import { GetElements } from "./Requests/request.js";

let userLoginEmail = document.querySelector("#userLoginEmail");
let userLoginPassword = document.querySelector("#userLoginPassword");
let userLoginForm = document.querySelector("#userLoginForm");

GetElements(baseUrl.users).then((res) => {
    const data = res.data;
    userLoginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let findedUser = data.find(user => user.email == userLoginEmail.value && user.password == userLoginPassword.value);
        if (!findedUser) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid email or password"
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Ugurla login olundu",
                showConfirmButton: false,
                timer: 1500
            });
            clearInput()
        }
    })
})

function clearInput() {
    userLoginEmail.value = "",
    userLoginPassword.value = ""
}

