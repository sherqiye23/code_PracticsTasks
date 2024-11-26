import { localHostUrl } from "./baseurl.js";
import { GetElementById, GetElements, UpdateElement } from "./Requests/requests.js";

let userId = JSON.parse(localStorage.getItem("userInfo"));
let navbar = document.querySelector(".navbar")
let navHeart = document.querySelector(".heart");
let navBasket = document.querySelector(".basket")

export async function HeaderFunction() {
    navHeart.addEventListener("click", () => {
        if (!userId) {
            alert("Siz qeydiyyatdan keçdikdən sonra bu səhifəyə daxil ola bilərsiz");
            window.location.href = "./login.html"
        } else {
            window.location.href = "./favorites.html"
        }
    })
    navBasket.addEventListener("click", () => {
        if (!userId) {
            alert("Siz qeydiyyatdan keçdikdən sonra bu səhifəyə daxil ola bilərsiz");
            window.location.href = "./login.html"
        } else {
            window.location.href = "./basket.html"
        }
    })
}

export async function GetLocalId() {
    if (!userId) {
        navbar.innerHTML = `
        <h1>You are not logged in!</h1>
        <button><a href="./login.html">Sign in!</a></button>
    `
    } else {
        GetElementById(localHostUrl + "users", userId).then(res => {
            const data = res.data;
            navbar.innerHTML = `
            <h1>Hello, ${data.username}!</h1>
            <button id="logoutBTN" >Log out!</button>
        `
            let logoutBTN = document.querySelector("#logoutBTN");
            logoutBTN.addEventListener("click", () => {
                localStorage.removeItem("userInfo");
                location.reload();
                GetLocalId();
            });
        })
    }
}