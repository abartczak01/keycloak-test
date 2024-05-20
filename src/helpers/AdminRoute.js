import { useKeycloak } from "@react-keycloak/web";

const AdminRoute = ({ children }) => {
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;
  const isAdmin = isLoggedIn && keycloak.hasRealmRole("admin");

  return isAdmin ? children : null;
};

export default AdminRoute;
