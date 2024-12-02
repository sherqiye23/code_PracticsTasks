// elements 
export async function GetElements(url) {
    let data;
    let error;
    await axios.get(url).then(res => data = res.data).catch(fatal => error = fatal);
    return { data, error }
}

// post 
export async function GetElementPost(url, newData) {
    let data;
    let error;
    await axios.post(url, newData).then(res => data = res.data).catch(fatal => error = fatal);
    return { data, error }
}

// id 
export async function GetElementById(url, id) {
    let data;
    let error;
    await axios.get(url+id).then(res => data = res.data).catch(fatal => error = fatal);
    return { data, error }
}