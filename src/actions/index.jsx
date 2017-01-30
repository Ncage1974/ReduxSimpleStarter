import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
const ROOT_URL = 'http://reduxblog.herokupapp.com/api'
const API_KEY = 'bw123';


export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`)
    return {
        type: FETCH_POSTS,
        payload: request
    };
}