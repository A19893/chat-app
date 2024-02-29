import axios from "axios"

export const signup_user = (data) => axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/user`,data);
export const auth_user = (data) => axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/api/user/login`,data);