let countryName = new URLSearchParams(window.location.search).get("name");
console.log(countryName);

let index2 = document.querySelector("mycontainer");


axios.get(`https://restcountries.com/v3.1/name/${countryName}`).then(response => {
    const data = response.data;
    console.log(data[0]);
    index2.innerHTML = `
                    <div class="card">
                        <img src="${data[0].flags.svg}" class="card-img-top" alt="...">

                    <div class="card-body">
                        <h5 class="card-title">${data[0].name.common}</h5>
                        <p class="card-text"><b>Capital: </b>${data[0].capital[0]}</p>
                        <p class="card-text"><b>Status: </b>${data[0].status}</p>
                        <p class="card-text"><b>Region: </b>${data[0].region}</p>
                        <p class="card-text"><b>Population: </b>${data[0].population}</p>
                        <a href="./index.html" class="btn btn-primary">Go back <<</a>
                    </div>
                    </div>

                    <div class="card" aria-hidden="true">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                        </p>
                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                    </div>
                    `
})


