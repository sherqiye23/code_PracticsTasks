import { localHostUrl } from "./baseurl.js";
import { GetElementById, GetElements, UpdateElement } from "./Requests/requests.js";
import { HeaderFunction, GetLocalId } from "./header.js";

HeaderFunction();
GetLocalId();

let id = new URLSearchParams(window.location.search).get("id")
let userId = JSON.parse(localStorage.getItem("userInfo"));;

GetElementById(localHostUrl+"phones", id).then(res => {
    const phone = res.data;
    ShowDetail(phone)
})

let card = document.querySelector(".right");
function ShowDetail(phone) {
    card.innerHTML = `
        <div class="about">
                    <h1>${phone.brand}</h1>
                    <h2>Model : ${phone.model}</h2>
                    <h3>Əməliyyat sistemi : ${phone.operatingSystem}</h3>
                    <h3>Buraxılış ili : ${phone.year}</h3>
                </div>
                <div class="price">
                    <h1>${phone.price}$</h1>
                    <div class="icons">
                        <span class="addFavs" data-id="${phone.id}">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16z">
                                </path>
                            </svg>
                            <span class="addText">Add to Favorites</span>
                        </span>
                        <span class="addBasket" data-id="${phone.id}">
                            <span class="addText">Add to Basket</span>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 10l-2 -6"></path>
                                <path d="M7 10l2 -6"></path>
                                <path
                                    d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.359 2.043">
                                </path>
                                <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                <path d="M16 19h6"></path>
                                <path d="M19 16v6"></path>
                            </svg>
                        </span>
                    </div>
                </div>
    `

    document.querySelector(".addFavs").addEventListener("click", () => {
        GetElementById(localHostUrl + "users", userId).then(res => {
            const data = res.data;
            if (data.favorites.includes(id)) {
                alert("siz bu mehsulu fav liste elave elemisiz");
            } else {
                data.favorites.push(id);
                UpdateElement(localHostUrl + "users", userId, data).then(() => { })
            }
        })
    })

    document.querySelector(".addBasket").addEventListener("click", () => {
        GetElementById(localHostUrl + "users", userId).then(res => {
            const data = res.data;
            console.log(id);
            let x = data.baskets.find(phone => phone.id == id)
            if (x) {
                alert("siz bu mehsulu sebete elave elemisiz");
            } 
            else {
                data.baskets.push({ id: id, count: 1 });
                UpdateElement(localHostUrl + "users", userId, data).then(() => { })
            }
        })
    })
}
