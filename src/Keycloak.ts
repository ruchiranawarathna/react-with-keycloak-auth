import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:8180",
    realm: "Demo",
    clientId: "react-app",
});

export default keycloak;



