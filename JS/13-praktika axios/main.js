import { url } from "./API/url.js";
import {
    GetCategories,
    GetCategoryById,
    EditCategory,
    DeleteCategory,
    PostCategory
} from "./API/Requests/requests.js";

let container = document.querySelector(".container");
let overlay = document.querySelector(".overlay");
let editModal = document.querySelector(".editModal");
let editForm = document.querySelector(".editForm");
let editName = document.querySelector("#editName");
let editDescription = document.querySelector("#editDescription");
let close = document.querySelector("#close")


function ShowCategories(array) {
    container.innerHTML = "";
    array.forEach(category => {
        container.innerHTML += `
            <div class="category">
                <span class="name">${category.name}</span>
                <div class="buttons">
                    <button id="edit" data-id="${category.id}">Edit</button>
                    <button id="details"><a href="./detailspage.html?id=${category.id}" target="_blank">Details</a></button>
                    <button id="delete" data-id="${category.id}">Delete</button>
                </div>
            </div>
        `;

        let deleteBTNS = document.querySelectorAll("#delete");
        deleteBTNS.forEach(deletebtn => {
            deletebtn.addEventListener("click", () => {
                let id = deletebtn.getAttribute("data-id");
                // alert 
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        DeleteCategory(url, id).then(res => {
                            // const data = res.data;
                            GetCategories(url).then(res => {
                                const data = res.data;
                                ShowCategories(data);
                            })
                        });
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                });
            })
        })

        let editBTNS = document.querySelectorAll("#edit");
        editBTNS.forEach(editbtn => {
            editbtn.addEventListener("click", () => {
                let id = editbtn.getAttribute("data-id");
                console.log((id));
                editFunction(id);
            })

        });
        close.addEventListener("click", (e) => {
            e.preventDefault();
            overlay.style.display = "none";
            editModal.style.display = "none";
        })

        function editFunction(id) {
            overlay.style.display = "block";
            editModal.style.display = "block";
            let findedCategory = array.find(value => value.id == id);
            console.log(findedCategory)
            editName.value = findedCategory.name;
            editDescription.value = findedCategory.description;

            editForm.addEventListener("submit", (e) => {
                e.preventDefault();
                if (editName.value.trim() != "" && editDescription.value.trim() != "") {
                    let editCompany = {
                        id: id,
                        name: editName.value,
                        description: editDescription.value
                    }
                    EditCategory(url, id, editCompany).then(res => {
                        const data = res.data;
                        GetCategories(url).then(res => {
                            const data = res.data;
                            ShowCategories(data)
                        })
                        Swal.fire({
                            icon: "success",
                            title: "Edit olundu",
                            showConfirmButton: false,
                            timer: 1800
                        });
                    });
                    overlay.style.display = "none";
                    editModal.style.display = "none";
                    // alert verir ki elave olundu
                } else {
                    // alert verir ki inputlar bosdu
                    Swal.fire({
                        icon: "error",
                        title: "XƏTA",
                        text: "Zəhmət olmasa inputları düzgün doldurun"
                    });
                }
            })
        }

    });
}

let addForm = document.querySelector(".addForm");

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let addName = document.querySelector("#addName");
    let addDescription = document.querySelector("#addDescription");
    if (addName.value.trim() != "" && addDescription.value.trim() != "") {
        let newData = {
            name: addName.value,
            description: addDescription.value,
        };
        PostCategory(url, newData).then(res => {
            const data = res.data;
            GetCategories(url).then(res => {
                const data = res.data;
                ShowCategories(data)
            })
        });
        Swal.fire({
            icon: "success",
            title: "Add olundu",
            showConfirmButton: false,
            timer: 1800
        });
        addName.value = "";
        addDescription.value = "";
    } else {
        // alert verir ki inputlar bosdu
        Swal.fire({
            icon: "error",
            title: "XƏTA",
            text: "Zəhmət olmasa inputları düzgün doldurun"
        });
    }

})





GetCategories(url).then(res => {
    const data = res.data;
    // console.log(data);
    ShowCategories(data)
})




