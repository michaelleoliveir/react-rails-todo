import axios from 'axios';

const BASE_URL = "http://127.0.0.1:3000/api/";
const GET_URL = `${BASE_URL}todos`;
const POST_URL = `${BASE_URL}todos`;
const DELETE_URL = (id) => `${BASE_URL}todos/${id}`
const UPDATE_URL = (id) => `${BASE_URL}todos/${id}/update_completed`

// pegar as informações presentes nos TO DO
export const get_todos = async() => {
    const response = await axios.get(GET_URL);
    return response.data;
}   

// criar um todo
export const create_todo = async(todo_name, description) => {
    const response = await axios.post(POST_URL, {'todo_name':todo_name, 'completed':false, 'description':description});
    return response.data;
}

// deletar todo
export const delete_todo = async(id) => {
    const response = await axios.delete(DELETE_URL(id));
    return response.data;
}

// atualizar todo
export const update_todo = async(id, completed) => {
    const response = await axios.patch(UPDATE_URL(id), {'completed':completed});
    return response.data;
}