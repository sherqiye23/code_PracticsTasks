
export async function GetElements(url) {
    let data;
    let error;

    await axios.get(url).then(res => data = res.data)
}