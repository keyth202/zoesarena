import { useContext } from "react";
import AuthContext from "contexts/JWTAuth";

const useAuth = () => useContext(AuthContext);

export default useAuth;