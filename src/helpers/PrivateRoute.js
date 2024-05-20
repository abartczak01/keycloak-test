import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;
  const isAdmin = isLoggedIn && keycloak.hasRealmRole("admin");

  return isLoggedIn ? children : null;
  // return
};

export default PrivateRoute;
