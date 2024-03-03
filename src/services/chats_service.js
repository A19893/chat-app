import axios from "axios"

export const fetch_users = (search, config) => axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/user?search=${search}`, config);

export const access_chats = (userId, config) => axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/chats`, {userId:userId} , config);

export const fetch_chats = (config) => axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/chats` , config); 

export const add_group_chats = (group , config ) => axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/chats/group`, group, config);

export const rename_group = (group , config) => axios.put(`${process.env.REACT_APP_BACKEND_API_URL}/api/chats/rename`, group, config);

export const add_member_to_group = ( group, config) => axios.put(`${process.env.REACT_APP_BACKEND_API_URL}/api/chats/group-add`, group, config)

export const remove_member_from_group = (group, config) => axios.put(`${process.env.REACT_APP_BACKEND_API_URL}/api/chats/group-remove`, group, config)