let container = document.querySelector(".container");
container.style.backgroundColor = "#2eba04";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.width = "15%";
container.style.margin = "0 auto";

let h1 = document.querySelector("h1");

let form = document.querySelector("form");
form.style.display = "flex";
form.style.justifyContent = "space-between";
form.style.alignItems = "center";
form.style.width = "100%";

let inputText = document.querySelector("#text");
let buttonAdd = document.querySelector("#add");

let addList = document.querySelector(".add-list");
addList.style.width = "100%";

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (inputText.value.trim() == "") {
        alert("ERROR");

    } else {
        let inputCheck = document.createElement("input");
        inputCheck.setAttribute("type", "checkbox");
        inputCheck.className = "check";

        let parag = document.createElement("p");
        parag.innerText = "Muellim Eve Gedey De";

        let buttonDelete = document.createElement("button");
        buttonDelete.innerText = "Delete";
        buttonDelete.className = "delete";

        let toDo = document.createElement("div");
        toDo.className = "to-do";
        toDo.style.display = "flex"
        toDo.style.justifyContent = "space-between";
        toDo.style.alignItems = "center";

        toDo.append(inputCheck, parag, buttonDelete)
        addList.append(toDo);


        buttonDelete.addEventListener("click", function () {
            toDo.remove()
        })

        inputCheck.addEventListener('change', () => {
            // checkbox'un dəyişikliyini yoxluyur, yəni seçilibsə üsttən xətt çəksin, seçilmiyibsə xətt çəkilməsin
            if (inputCheck.checked) {
                parag.style.textDecoration = "line-through";
            } else {
                parag.style.textDecoration = "none";
            }
        })
    }
    inputText.value = ""
})










