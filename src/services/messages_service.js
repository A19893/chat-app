import axios from "axios";

export const send_message = (message, config) => axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/message`, message , config);

export const fetch_message = (chatId, config) => axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/message/${chatId}`, config)