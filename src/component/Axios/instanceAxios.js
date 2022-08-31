import axios from "axios";
const instanceAxios = axios.create({
    baseURL: 'https://6307c5c93a2114bac76b5bbd.mockapi.io/_DucAnhDz_/API/',
    headers: {'X-Custom-Header': 'foobar'}
});

export const getData = () => {
    return instanceAxios.get("TodoApp")
            .then((response) => response.data)
}

export const getDataByID = (id) => {
    return instanceAxios.get(`TodoApp/${id}`)
            .then((respose) => respose.data)
            .catch((error) => {console.log(error)})
}

export const putData = (id,data) => {
    instanceAxios.put(`TodoApp/${id}`,data)
}

export default instanceAxios;