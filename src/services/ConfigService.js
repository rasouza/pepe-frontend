import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const all = async () => axios.get(`${API_URL}configs`);
