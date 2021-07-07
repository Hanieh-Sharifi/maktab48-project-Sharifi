import axios from "axios";

export const LoginFetch = async (email, password) => {
    return axios.post("https://reqres.in/api/login", { email: email, password: password });
}