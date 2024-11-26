import { localHostUrl } from "./baseurl.js";
import { GetElementById, GetElements, UpdateElement } from "./Requests/requests.js";
import { HeaderFunction, GetLocalId } from "./header.js";

GetLocalId()
HeaderFunction()

let cards = document.querySelector(".cards");
let userId = JSON.parse(localStorage.getItem("userInfo"));

function GetBasket() {
    GetElementById(localHostUrl + "users", userId).then(res => {
        const userData = res.data;
        GetElements(localHostUrl + "phones").then(res => {
            const productData = res.data;         
            let basketProducts = productData.filter(product => userData.baskets.includes(String(product.id)));
            ShowFavs(basketProducts)
        })
    })
}
GetBasket()

function ShowFavs(array) {
    cards.innerHTML = "";
    if (array.length == 0) {
        cards.innerHTML = `
            <h2>
                Sizin basket səhifəniz boşdur!
            </h2>
        `
    } else {
        array.forEach(({id, brand, model, year, operatingSystem, price}) => {
            cards.innerHTML += `
                <div class="card">
                    <div class="image">
                        <img src="https://cdn-icons-png.flaticon.com/512/1169/1169615.png" alt="phone icon">
                    </div>
                    <div class="text">
                        <h4>${brand}</h4>
                        <h3>${model}, ${year}</h3>
                        <p>${operatingSystem}</p>
                        <h3>${price}$</h3>
                    </div>
                    <div class="icons">
                        <span class="removeBasket" data-id="${id}">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M17 10l-2 -6"></path><path d="M7 10l2 -6"></path><path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.833 4.75"></path><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M16 19h6"></path></svg>
                            <span class="removeText">Remove from Basket</span>
                        </span>
                    </div>
                </div>
            `

            let removeBasket = document.querySelectorAll(".removeBasket");
            removeBasket.forEach(basket => {
                basket.addEventListener("click", () => {
                    let id = basket.getAttribute("data-id");
                    GetElementById(localHostUrl + "users", userId).then(res => {
                        const userData = res.data;
                        let indexFind = (userData.baskets).indexOf(id);
                        (userData.baskets).splice(indexFind, 1);
                        UpdateElement(localHostUrl + "users", userId, userData).then(() => { });
                    })
                })
            });
        });
    }
}


