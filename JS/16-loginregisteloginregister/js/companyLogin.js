import { baseUrl } from "./Requests/baseUrl.js";
import { GetElements } from "./Requests/request.js";

let comLoginName = document.querySelector("#comLoginName");
let comLoginPassword = document.querySelector("#comLoginPassword");
let comLoginForm = document.querySelector("#comLoginForm");

GetElements(baseUrl.companies).then((res) => {
    const data = res.data;
    comLoginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let findedCompany = data.find(company => company.name == comLoginName.value && company.password == comLoginPassword.value);
        if (!findedCompany) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid email or password"
            });
        } else {
            Swal.fire({
                icon: "success",
                title: "Company ugurla login olundu",
                showConfirmButton: false,
                timer: 1500
            });
            clearInput()
        }
    })
})

function clearInput() {
    comLoginName.value = "",
    comLoginPassword.value = ""
}

