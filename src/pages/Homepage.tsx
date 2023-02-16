    import { useKeycloak } from "@react-keycloak/web";
    import { useState, useEffect } from "react";


    const Home = () => {

      const { keycloak } = useKeycloak();
      const [isLoggedIn, setIsLoggedIn] = useState(false)

      useEffect(()=>{
          setIsLoggedIn(keycloak.authenticated || false)
      }, [keycloak])    
      
      console.log("-----------is logged in:", isLoggedIn)
    
      return isLoggedIn ?  <h1 className="text-green-800 text-4xl">Welcome</h1> 
                          : <div>{`User is NOT authenticated`}</div>;


    };

    export default Home;