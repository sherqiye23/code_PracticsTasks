import { baseUrl } from "./Requests/baseUrl.js";
import { GetElementPost, GetElements } from "./Requests/request.js";

let comRegName = document.querySelector("#comRegName");
let comRegLocation = document.querySelector("#comRegLocation");
let comRegPassword = document.querySelector("#comRegPassword");
let comRegWebsite = document.querySelector("#comRegWebsite");
let comRegForm = document.querySelector("#comRegForm");

GetElements(baseUrl.companies).then(res => {
    const data = res.data;
    comRegForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let findedSame = data.find(company => company.name == comRegName.value);
        if (findedSame) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Bu company adi qeydiyyatdan kecmisdir"
            });
        } else {
            let newCompany = {
                name: comRegName.value,
                location: comRegLocation.value,
                password: comRegPassword.value,
                website: comRegWebsite.value
            }

            if (comRegName.value.trim() != "" && comRegLocation.value.trim() != "" && comRegPassword.value.trim() != "" && comRegWebsite.value.trim() != "") {
                GetElementPost(baseUrl.companies, newCompany).then(() => { });
                Swal.fire({
                    icon: "success",
                    title: "Ugurla qeydiyyatdan kecildi",
                    showConfirmButton: false,
                    timer: 1500
                });
                clearInput()
                window.location = "./companyLogin.html";
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
    comRegName.value = "",
    comRegLocation.value = "",
    comRegPassword.value = "",
    comRegWebsite.value = ""
}