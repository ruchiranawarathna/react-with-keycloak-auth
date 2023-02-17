import { useKeycloak } from "@react-keycloak/web";

const Home = () => {

  const { keycloak } = useKeycloak();
  let isLoggedIn = keycloak.authenticated;
 
  console.log("-----------is logged in:", isLoggedIn)

  return isLoggedIn ? <h1 className="text-green-800 text-4xl">Welcome</h1>
    : <div>{`User is NOT authenticated`}</div>;


};

export default Home;