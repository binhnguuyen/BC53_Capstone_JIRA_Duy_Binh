import axios from "axios";
import { getLocalStorage } from "../utils/helpers";
import { CURRENT_USER } from "../utils/constants";

const fetcher = axios.create({
    baseURL: import.meta.env.baseUrl,
    headers: {
        TokenCybersoft: import.meta.env.TokenCybersoft,
    }
});

fetcher.interceptors.request.use((config) => {
    const user = getLocalStorage(CURRENT_USER);
    if (user) {
        config.headers.Authorization = user.accessToken;

    }
    return config;
})

fetcher.interceptors.response.use((response) => {
    return response;
})



export default fetcher;