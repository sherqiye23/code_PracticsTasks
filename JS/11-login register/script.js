import {GetUserById} from "./API/Request/requests.js";
import {url} from "./API/baseUrl.js"
let logoutSignin = document.querySelector(".logout-signin");

function GetLocalId() {
    let userId = JSON.parse(localStorage.getItem("userInfo"));
    if (userId) {
        GetUserById(url, userId).then(res => {
            const data = res.data;
            logoutSignin.innerHTML = `
            <div class="logout">
                <span class="username">${data.username}</span>
                <button id="logout">Log Out!</button>
            </div>
        `
        let logout = document.querySelector("#logout");
        logout.addEventListener("click", () => {
            // logoutSignin.innerHTML = "";
            // logoutSignin.innerHTML = `
            //     <a href="./login.html">
            //         <button id="signIn">Sign in!</button>
            //     </a>
            // `
            localStorage.removeItem("userInfo");
            GetLocalId()
        })
        }) 
    } else {
        logoutSignin.innerHTML = `
            <a href="./login.html">
                <button id="signIn">Sign in!</button>
            </a>
        `
    }
    
}
GetLocalId()
