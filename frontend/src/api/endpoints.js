import axios from 'axios';

const BASE_URL = "http://127.0.0.1:3000/api/";
const GET_URL = `${BASE_URL}todos`;

// pegar as informações presentes nos TO DO
export const get_todos = async() => {
    const response = await axios.get(GET_URL);
    return response.data;
}