import axios from "axios";
import keycloakConfig from "./keycloak-config.js";

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    console.log(value);
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

export const Api = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        // "Authorization": `Bearer ${token}`
    },
});

Api.interceptors.request.use(
    (config) => {
        // Include the CSRF token in the headers
        const csrfToken = getCookie("csrftoken"); // Get CSRF token from cookies
        config.headers["X-CSRFToken"] = csrfToken;

        console.log('Keycloak', keycloakConfig.token);

        // check if token exists in keycloakConfig before adding it to headers
        if (keycloakConfig && keycloakConfig.token) {
            config.headers["Authorization"] = `Bearer ${keycloakConfig.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)