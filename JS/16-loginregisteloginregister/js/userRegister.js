import { baseUrl } from "./Requests/baseUrl.js";
import { GetElementPost, GetElements } from "./Requests/request.js";

let userRegFName = document.querySelector("#userRegFName");
let userRegEmail = document.querySelector("#userRegEmail");
let userRegPassword = document.querySelector("#userRegPassword");
let userRegForm = document.querySelector("#userRegForm");
GetElements(baseUrl.users).then((res) => {
    const data = res.data;
    userRegForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let findedSame = data.find(user => user.email == userRegEmail.value);
        if (findedSame) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Bu email ile qeydiyyatdan kecilib"
            });
        } else {
            let newUser = {
                fullName: userRegFName.value,
                email: userRegEmail.value,
                password: userRegPassword.value
            }
            if (userRegFName.value.trim() != "" && userRegEmail.value.trim() != "" && userRegPassword.value.trim() != "") {
                GetElementPost(baseUrl.users, newUser).then(() => { });
                Swal.fire({
                    icon: "success",
                    title: "Ugurla qeydiyyatdan kecildi",
                    showConfirmButton: false,
                    timer: 1500
                });
                clearInput();
                window.location = "./userLogin.html"
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Inputlari duzgun daxil edin"
                });
            }
        }
    })
})


function clearInput() {
    userRegFName.value = "",
    userRegEmail.value = "",
    userRegPassword.value = ""  
}

