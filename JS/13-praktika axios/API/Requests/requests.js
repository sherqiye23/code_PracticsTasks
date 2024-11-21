

// melumatlari getirme --> get
async function GetCategories(url) {
    let data;
    let error;
    await axios.get(url).then(res => data = res.data).catch(err => error = err);
    return {
        data,
        error
    }
}

// add
async function PostCategory(url, newCategory) {
    let data;
    let error;
    await axios.post(url, newCategory).then(res => data = res.data).catch(err => error = err);
    return {
        data,
        error
    }
}

// edit
async function EditCategory(url, id, newUpdate) {
    let data;
    let error;
    await axios.patch(`${url}/${id}`, newUpdate).then(res => data = res.data).catch(err => error = err);
    return {
        data,
        error
    }
}

// details
async function GetCategoryById(url, id) {
    let data;
    let error;
    await axios.get(`${url}/${id}`).then(res => data = res.data).catch(err => error = err);
    return {
        data,
        error
    }
}


// delete
async function DeleteCategory(url, id) {
    let data;
    let error;
    await axios.delete(`${url}/${id}`).then(res => data = res.data).catch(err => error = err);
    return {
        data,
        error
    }
}



export {
    GetCategories,
    GetCategoryById,
    EditCategory,
    DeleteCategory,
    PostCategory
}




