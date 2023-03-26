import React, {useEffect, useState} from "react";
import Keycloak from 'keycloak-js'

export const useAuth = () => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const keycloak = new Keycloak({
            url: "http://localhost:8180",
            realm: "Demo",
            clientId: "react-app",
        });

        keycloak.init({onLoad: "login-required"}).then((res) => console.log(keycloak.token));
    }, [])

    return isLogin;
}

export default useAuth;