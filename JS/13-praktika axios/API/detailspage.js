import { GetCategoryById } from "./Requests/requests.js";
import { url } from "./url.js";

let detailsContainer = document.querySelector(".detailsContainer");
let id = new URLSearchParams(window.location.search).get("id");

function ShowDetails(data) {
    detailsContainer.innerHTML = `
        <div class="detailsCategory">
            <span class="name"><b>CATEGORY NAME:</b> ${data.name}</span>
            <span class="description"><b>CATEGORY DESCRIPTION:</b> ${data.description}</span>
        </div>
    `
}

GetCategoryById(url, id).then(res => {
    const data = res.data;
    ShowDetails(data);
})




