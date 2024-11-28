// melumatlari jsondan getirme
export async function GetElements(url) {
    let data;
    let error;

    await axios.get(url).then(res => data = res.data).catch(err => error = err);

    return {
        data,
        error
    }
}

// post
export async function PostElements(url, newData) {
    let data;
    let error;

    await axios.post(url, newData).then(res => data = res.data).catch(err => error = err);

    return {
        data,
        error
    }
}

// id ile tapma
export async function GetElementById(url, id) {
    let data;
    let error;

    await axios.get(`${url}/${id}`).then(res => data = res.data).catch(err => error = err);

    return {
        data,
        error
    }
}

// put ile tapma
export async function UpdateElement(url, id, updateData) {
    let data;
    let error;

    await axios.put(`${url}/${id}`, updateData).then(res => data = res.data).catch(err => error = err);

    return {
        data,
        error
    }
}

// delete ile silme
export async function DeleteElement(url, id) {
    let data;
    let error;

    await axios.delete(`${url}/${id}`).then(res => data = res.data).catch(err => error = err);

    return {
        data,
        error
    }
}
