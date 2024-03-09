// Keycloak-config.js

import Keycloak from "keycloak-js";


let initOptions = {
    url: process.env.KEYCLOAK_URL,
    realm: process.APP_KEYCLOAK_REALM,
    clientId: process.APP_KEYCLOAK_CLIENT_ID,
    clientSecret: process.env.APP_KEYCLOAK_CLIENT_SECRET
};

console.log(initOptions);

const keycloakConfig = new Keycloak(initOptions);

export default keycloakConfig;