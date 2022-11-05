import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8080/',
    headers: {
        accept: 'application/json'
    }
})

const setupInterceptors = (store) => {
    const API_URL = "http://127.0.0.1:8080/";

    axiosInstance.interceptors.request.use(
        (request) => {
            console.log("intercepting")

            if (request.url !== API_URL + "token/obtain/" && request.url !== API_URL + "token/refresh/" && request.url !== API_URL + "signup/") {
                // console.log("intercepted request :-) ", request.url, store.getState().auth.user.access)
                // setting auth headers only if we are not trying to get tokens
                request.headers['Authorization'] = "Bearer " + store.getState().auth.token
            }
            return request
        },
        (error) => {
            return Promise.reject(error)
        }
    )
}

export default axiosInstance
export { setupInterceptors }

// https://github.com/reduxjs/redux-toolkit/issues/687