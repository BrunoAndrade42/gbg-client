import Axios from 'axios';

export const api = Axios.create({baseURL:"https://gbg-server.herokuapp.com"})