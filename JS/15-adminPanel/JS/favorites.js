import { localHostUrl } from "./url.js";
import { GetElementById, GetElements, UpdateElement } from "./Requests/requests.js";

let cards = document.querySelector(".cards");

let userId = JSON.parse(localStorage.getItem("userInfo"));

function GetFavorites() {
    GetElementById(localHostUrl + "users", userId).then(res => {
        const userData = res.data;
        GetElements(localHostUrl + "products").then(res => {
            const productData = res.data;
            let favProducts = productData.filter(product => userData.favorites.includes(product.id));
            ShowFavs(favProducts)
        })
    })
}
GetFavorites()

function ShowFavs(array) {
    cards.innerHTML = "";
    console.log(array.length);
    if (array.length == 0) {
        cards.innerHTML = `
            <h2>
                Sizin favorites səhifəniz boşdur!
            </h2>
        `
    } else {
        array.forEach(element => {
            cards.innerHTML += `
                <div class="card">
                    <div class="image">
                        <img src=${element.image}>
                    </div>
                    <div class="text">
                        <h4>${element.name}</h4>
                        <h3>${element.price}$</h3>
                        <p>${element.description}</p>
                    </div>
                    <div class="icons">
                        <span class="removeFavs" data-id="${element.id}">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-64 0c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16H496c8.8 0 16 7.2 16 16z"></path></svg>
                        <span class="removeText">Remove from Favorites</span>
                        </span>
                        <span class="addBasket" data-id="${element.id}">
                        <span class="addText">Add to Basket</span>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M17 10l-2 -6"></path><path d="M7 10l2 -6"></path><path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.359 2.043"></path><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M16 19h6"></path><path d="M19 16v6"></path></svg>
                        </span>
                    </div>
                </div>
            `

            let removeFavs = document.querySelectorAll(".removeFavs");
            removeFavs.forEach(removeFav => {
                removeFav.addEventListener("click", () => {
                    let id = removeFav.getAttribute("data-id");
                    GetElementById(localHostUrl + "users", userId).then(res => {
                        const userData = res.data;
                        let indexFind = (userData.favorites).indexOf(id);
                        (userData.favorites).splice(indexFind, 1);
                        UpdateElement(localHostUrl + "users", userId, userData).then(() => { });
                    })
                })
            });
        });
    }
}


