import axios from 'axios';

const API_KEY = 'e49ccfb869ff4ab3a1701430e459b168';
const BASE_URL = 'https://newsapi.org/v2';

export const getNewsByKeyword = (keyword) => {
    const url = `${BASE_URL}/everything?q=${keyword}&apiKey=${API_KEY}`;
    return axios.get(url).then((response) => response.data);
};

export const getTopHeadlines = () => {
    const url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`;
    return axios.get(url).then((response) => response.data);
};
