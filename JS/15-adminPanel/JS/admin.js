import { localHostUrl } from "./baseurl.js";
import { PostElements, UpdateElement, DeleteElement, GetElements, GetElementById } from "./Requests/requests.js";

let addForm = document.querySelector(".addForm");
let addBrand = document.querySelector("#addBrand");
let addModel = document.querySelector("#addModel");
let addOperatingSystem = document.querySelector("#addOperatingSystem");
let addYear = document.querySelector("#addYear");
let addPrice = document.querySelector("#addPrice");

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (addBrand.value.trim() == "" || addModel.value.trim() == "" || addOperatingSystem.value.trim() == "") {
        alert("Inputları düzgün daxil edin admin mellim");
        return;
    }
    let newPhone = {
        brand: addBrand.value,
        model: addModel.value,
        operatingSystem: addOperatingSystem.value,
        year: Number(addYear.value),
        price: Number(addPrice.value)
    }
    PostElements(localHostUrl+"phones", newPhone);
})

let tbody = document.querySelector("tbody");
GetElements(localHostUrl + "phones").then(res => {
    const phones = res.data;
    ShowPhonesInTable(phones)
    
})

function ShowPhonesInTable(array) {
    tbody.innerHTML = "";
    array.forEach(({id, brand, model, operatingSystem, year, price}) => {
        tbody.innerHTML += `
            <tr>
                <td><b>${id}</b></td>
                <td>${brand}</td>
                <td>${model}</td>
                <td>${operatingSystem}</td>
                <td>${year}</td>
                <td>${price}</td>
                <td style="text-align: center;">
                    <a href="./edit.html?id=${id}">
                        <svg id="editIcon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </a>
                </td>
                <td style="text-align: center;">
                    <svg id="deleteIcon" data-id="${id}" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"></path></svg>
                </td>
            </tr>
        `

        let deleteIcons = document.querySelectorAll("#deleteIcon");
        deleteIcons.forEach(deleteIcon => {
            deleteIcon.addEventListener("click", () => {
                let delId = deleteIcon.getAttribute("data-id");
                deletePhone(delId)
            })
        });

    });
}

// delete function
function deletePhone(id) {
    DeleteElement(localHostUrl+"phones", id).then(() => {})
}


