

let rowCol4 = document.querySelector(".row-cols-4");

function showFlags() {
    axios.get("https://restcountries.com/v3.1/all").then(response => {
        const data = response.data;
        data.forEach(element => {
            rowCol4.innerHTML += `
            <div class="col margin20px">
                <div class="card" style="width: 18rem;">
                    <img src="${element.flags.svg}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.name.common}</h5>
                        <p class="card-text"><b>Capital: </b>${element.capital[0]}</p>
                        <a href="./index2.html?name=${element.name.common}" class="btn btn-primary">Get more details >></a>
                    </div>
                </div>
            </div>
            `
        });
    });
}

showFlags()


