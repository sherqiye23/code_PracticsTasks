import { localHostUrl } from "./baseurl.js";
import { GetElementById, UpdateElement } from "./Requests/requests.js";

// edit form
let editForm = document.querySelector(".editForm");
let editBrand = document.querySelector("#editBrand");
let editModel = document.querySelector("#editModel");
let editOperatingSystem = document.querySelector("#editOperatingSystem");
let editYear = document.querySelector("#editYear");
let editPrice = document.querySelector("#editPrice");

let editId = new URLSearchParams(window.location.search).get("id");

GetElementById(localHostUrl+"phones", editId).then((res) => {
    const data = res.data;
    editBrand.value = data.brand
    editModel.value = data.model
    editOperatingSystem.value = data.operatingSystem
    editYear.value = data.year
    editPrice.value = data.price

    editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (editBrand.value.trim() != "" && editModel.value.trim() != "" && editOperatingSystem.value.trim() != "") {
            let updatePhone = {
                brand: editBrand.value,
                model: editModel.value,
                operatingSystem: editOperatingSystem.value,
                year: editYear.value,
                price: editPrice.value,
            }
        UpdateElement(localHostUrl+"phones", editId, updatePhone).then(() => {})
        window.location = "./admin.html"
        } else {
            alert("inputlari duzgun daxil edin")
        }
    })
})
