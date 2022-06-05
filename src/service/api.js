import Axios from 'axios';

export const api = Axios.create({baseURL: process.env.baseURL || 'http://localhost:3001'})