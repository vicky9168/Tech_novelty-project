import axios from 'axios';

const API = axios.create({ baseURL :'http://localhost:5000'})

export const postQuestion = (questionData) => API.post('/',questionData)
export const getAllQuestions = ()=> API.get('/');