
//post
export async function PostUser(url, newUser) {
    let data;
    let error;

    await axios.post(url, newUser).then(res => data = res.data).catch(err => error = err);

    return {
        data,
        error
    }
}

//get
export async function GetUsers(url) {
    let data;
    let error;

    await axios.get(url).then(res => data = res.data).catch(err => error = err);

    return {
        data,
        error
    }
}

//get by id
export async function GetUserById(url, id) {
    let data;
    let error;

    await axios.get(url+id).then(res => data = res.data).catch(err => error = err);

    return {
        data,
        error
    }
}
