// register
let registerUsername = document.querySelector("#register-username");
let registerPassword = document.querySelector("#register-password");
let registerForm = document.querySelector("#registerForm");
let usersInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

//login
let loginUsername = document.querySelector("#login-username");
let loginPassword = document.querySelector("#login-password");
let loginForm = document.querySelector("#loginForm");

//main navbar
let navbar = document.querySelector(".navbar");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(localStorage);
    console.log(usersInfo)
    // usersInfo.filter(element => {
    //     console.log(element)
    //     if (element.name == loginUsername.value && element.password == loginPassword.value) {
    //         // alert("Successfully logged")
    //         console.log("ugurludur")

    //         // console.log(element)
    //         // console.log(element.name, element.password)
    //         // console.log(loginUsername.value, loginPassword.value)
    //         // window.location = "./main.html"
    //         // navbar.innerHTML = `
    //         //     <p>Hello, ${loginUsername}</p>
    //         //     <button id="logOut">Log out!</button>`
    //     } else if (element.name == loginUsername.value && element.password != loginPassword.value) {
    //         // alert("UPassword is wrong!");
    //         console.log("sehv parol")
    //         // console.log(element)
    //         // console.log(element.name, element.password)
    //         // console.log(loginUsername, loginPassword)
    //     } else {
    //         // alert("User not existed!");
    //         console.log("sehv istifadeci");

    //         // console.log(element)
    //         // console.log(element.name, element.password)
    //         // console.log(loginUsername, loginPassword)
    //     }
    // });


    // let findedUser = usersInfo.filter(element => element.name == loginUsername.value && element.password == loginPassword.value);
    // console.log(Boolean(findedUser));
    // if (findedUser.length > 0) {
    //     alert("ugurludur")
    //     window.location = "./main.html";
    //     // navbar.innerHTML = `
    //     //     <p>Hello, ${loginUsername}</p>
    //     //     <button id="logOut">Log out!</button>`
    //     // let logOut = document.querySelector("#logOut");
    //     // logOut.addEventListener("click", ()=>{
    //     //     navbar.innerHTML = `
    //     //         <p>You are not logged in!</p>
    //     //         <button id="signIn">Sign in!</button>`
    //     // })
    // } else {

    // }

    usersInfo.forEach(element => {
        if (element.name == loginUsername.value && element.password == loginPassword.value) {
            // alert("Successfully logged")
            console.log("ugurludur");
        
            // console.log(element)
            // console.log(element.name, element.password)
            // console.log(loginUsername.value, loginPassword.value)
            // window.location = "./main.html"
            // navbar.innerHTML = `
            //     <p>Hello, ${loginUsername}</p>
            //     <button id="logOut">Log out!</button>`
        }
    });

    usersInfo.forEach(element => {
        findedUser = []
        findedUser.push(element)
        console.log(findedUser);
        if (findedUser.name == loginUsername.value && findedUser.password == loginPassword.value) {
            // alert("Successfully logged")
            console.log("ugurludur");
        
            // console.log(element)
            // console.log(element.name, element.password)
            // console.log(loginUsername.value, loginPassword.value)
            // window.location = "./main.html"
            // navbar.innerHTML = `
            //     <p>Hello, ${loginUsername}</p>
            //     <button id="logOut">Log out!</button>`
        } else if (findedUser.name == loginUsername.value && findedUser.password != loginPassword.value) {
            // alert("UPassword is wrong!");
            console.log("sehv parol")
            // console.log(element)
            // console.log(element.name, element.password)
            // console.log(loginUsername, loginPassword)
        } else {
            // alert("User not existed!");
            console.log("sehv istifadeci");

            // console.log(element)
            // console.log(element.name, element.password)
            // console.log(loginUsername, loginPassword)
        }

    });
    
    usersInfo.forEach(element => {
        findedUser = []
        findedUser.push(element)
        console.log(findedUser);
        if (findedUser.name == loginUsername.value && findedUser.password == loginPassword.value) {
            // alert("Successfully logged")
            console.log("ugurludur");
        
            // console.log(element)
            // console.log(element.name, element.password)
            // console.log(loginUsername.value, loginPassword.value)
            // window.location = "./main.html"
            // navbar.innerHTML = `
            //     <p>Hello, ${loginUsername}</p>
            //     <button id="logOut">Log out!</button>`
        } else if (findedUser.name == loginUsername.value && findedUser.password != loginPassword.value) {
            // alert("UPassword is wrong!");
            console.log("sehv parol")
            // console.log(element)
            // console.log(element.name, element.password)
            // console.log(loginUsername, loginPassword)
        } else {
            // alert("User not existed!");
            console.log("sehv istifadeci");

            // console.log(element)
            // console.log(element.name, element.password)
            // console.log(loginUsername, loginPassword)
        }

    });


})