import axios from "axios";

const $public = axios.create({
   baseURL: 'http://localhost:5000/'
});

const $authPublic = axios.create({
    baseURL: 'http://localhost:5000/'
});

export const Public = config => {
    config.headers.timeout = '1000';
    return config;
}

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
}

$authPublic.interceptors.request.use(authInterceptor);

export {
    $public,
    $authPublic
}