import Axios from 'axios';

export const api = Axios.create({withCredentials: true, baseURL: "https://gbg-server.herokuapp.com"});