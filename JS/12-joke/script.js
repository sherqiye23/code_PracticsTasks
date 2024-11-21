let jokeWrapper = document.querySelector(".joke-wrapper");
let button = document.querySelector(".button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    zarafatMashini()
});

function zarafatMashini() {
    let url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas";
    fetch(url).then(res => res.json()).then(data => {
        if (data.joke) {
            jokeWrapper.innerHTML = `
            <div class="joke">
                ${data.joke}
            </div>
            <div class="category">
                Category: ${data.category}
            </div>
            `
        } else {
            jokeWrapper.innerHTML = `
            <div class="joke">
                ${data.setup, data.delivery}
            </div>
            <div class="category">
                Category: ${data.category}
            </div>
            `
        }
    })
}
zarafatMashini()



