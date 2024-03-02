import axios from "axios"

export const fetch_users = (search, config) => axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/user?search=${search}`, config);

export const access_chats = (userId, config) => axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/chats`, {userId:userId} , config);

export const fetch_chats = (config) => axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/chats` , config); 