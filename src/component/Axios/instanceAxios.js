import axios from "axios";
const instanceAxios = axios.create({
    baseURL: 'https://6307c5c93a2114bac76b5bbd.mockapi.io/_DucAnhDz_/API/',
    headers: {'X-Custom-Header': 'foobar'}
});

export const AxiosGetData = () => {
    return instanceAxios.get("TodoApp")
            .then((response) => response.data)
}

export const AxiosGetDataByID = (id) => {
    return instanceAxios.get(`TodoApp/${id}`)
            .then((respose) => respose.data)
            .catch((error) => {console.log(error)})
}

export const AxiosPutData = (id,data) => {
    instanceAxios.put(`TodoApp/${id}`,{
        data: data,
    })
}

export default instanceAxios;