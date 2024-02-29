import axios from "axios"

export const fetch_chats = () => axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/chats`);