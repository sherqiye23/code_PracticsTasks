import { localHostUrl } from "./url.js";
import { GetElementById, GetElements, UpdateElement } from "./requests/requests.js";

let cards = document.querySelector(".cards");
GetElements(localHostUrl + "products").then(res => {
    const data = res.data;
    ShowProducts(data);
})

function GetLocalId() {
    let userId = JSON.parse(localStorage.getItem("userInfo"));
    let navbar = document.querySelector(".nav")

    if (!userId) {
        navbar.innerHTML = `
        <h1>You are not logged in!</h1>
            <div class="icons">
                <button><a href="./login.html">Sign in!</a></button>
                <!-- heart icon -->
                    <svg class="heart" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                        height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                        </path>
                    </svg>
                <!-- basket icon -->
                <svg class="basket" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                    height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80zm-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80z">
                    </path>
                </svg>
            </div>
    `
        let heart = document.querySelector(".heart");
        heart.addEventListener("click", () => {
            alert("qardas sen qeydiyyatdan kecmemisen gedirsen favs sehifesine senin hesabin var? gonderrem seni ged qeydiyyatdan kec");
            window.location.href = "./login.html"
        })
        let basket = document.querySelector(".basket");
        basket.addEventListener("click", () => {
            alert("qardas sen qeydiyyatdan kecmemisen gedirsen basket sehifesine senin hesabin var? gonderrem seni ged qeydiyyatdan kec");
            window.location.href = "./login.html"
        })
    } else {
        GetElementById(localHostUrl + "users", userId).then(res => {
            const data = res.data;

            navbar.innerHTML = `
            <h1>Hello, ${data.username}!</h1>
                <div class="icons">
                    <button id="logoutBTN" >Log out!</button>
                    <!-- heart icon -->
                    <a href="./favorites.html">
                        <svg class="heart" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                            height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z">
                            </path>
                        </svg>
                    </a>
                    <!-- basket icon -->
                    <a href="./basket.html" style="color:#000">
                    <svg class="basket" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                        height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1015.66 284a31.82 31.82 0 0 0-25.998-13.502H310.526l-51.408-177.28c-20.16-69.808-68.065-77.344-87.713-77.344H34.333c-17.569 0-31.777 14.224-31.777 31.776S16.78 79.425 34.332 79.425h137.056c4.336 0 17.568 0 26.593 31.184l176.848 649.936c3.84 13.712 16.336 23.183 30.591 23.183h431.968c13.409 0 25.376-8.4 29.905-21.024l152.256-449.68c3.504-9.744 2.048-20.592-3.888-29.024zM815.026 720.194H429.539L328.387 334.066h616.096zM752.003 848.13c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80zm-288 0c-44.192 0-80 35.808-80 80s35.808 80 80 80 80-35.808 80-80-35.808-80-80-80z">
                        </path>
                    </svg>
                    </a>
                </div>
        
        `

            let logoutBTN = document.querySelector("#logoutBTN");
            logoutBTN.addEventListener("click", () => {
                localStorage.removeItem("userInfo");
                GetLocalId()
            })
        })
    }
}
GetLocalId()

function ShowProducts(array) {
    cards.innerHTML = "";
    array.forEach(product => {
        cards.innerHTML += `
            <div class="card">
                <div class="image">
                    <img src=${product.image}>
                </div>
                <div class="text">
                    <h4>${product.name}</h4>
                    <h3>${product.price}$</h3>
                    <p>${product.description}</p>
                </div>
                <div class="icons">
                    <span class="addFavs" data-id="${product.id}">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path></svg>
                    <span class="addText">Add to Favorites</span>
                    </span>
                    <span class="addBasket" data-id="${product.id}">
                    <span class="addText">Add to Basket</span>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M17 10l-2 -6"></path><path d="M7 10l2 -6"></path><path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.359 2.043"></path><path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path><path d="M16 19h6"></path><path d="M19 16v6"></path></svg>
                    </span>
                </div>
            </div>
        `

        let addFavs = document.querySelectorAll(".addFavs");
        addFavs.forEach(addFav => {
            addFav.addEventListener("click", () => {
                let favId = addFav.getAttribute("data-id");
                let userId = JSON.parse(localStorage.getItem("userInfo"));
                GetElementById(localHostUrl+"users", userId).then(res => {
                    const data = res.data;
                    if (data.favorites.includes(favId)) {
                        alert("siz bu mehsulu fav liste elave elemisiz");
                    } else {
                        data.favorites.push(favId);
                        UpdateElement(localHostUrl+"users", userId, data).then(() => {})
                    }
                })
            })
        })

        let addBasket = document.querySelectorAll(".addBasket");
        addBasket.forEach(basket => {
            basket.addEventListener("click", () => {
                let basketId = basket.getAttribute("data-id");
                let userId = JSON.parse(localStorage.getItem("userInfo"));
                GetElementById(localHostUrl+"users", userId).then(res => {
                    const data = res.data;
                    if (data.baskets.includes(basketId)) {
                        alert("siz bu mehsulu sebete elave elemisiz");
                    } else {
                        data.favorites.push(favId);
                        UpdateElement(localHostUrl+"users", userId, data).then(() => {})
                    }
                })
            })
        })
    });
}




