import Cookies from "js-cookie";
import { TOKEN } from "../app.constants";
import { useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";
import { useEffect } from "react";

export const useCheckAuth = () => {
  const { isAuth, setIsAuth } = useAuth();
  const { pathname, navigate } = useLocation();

  useEffect(() => {
    const token = Cookies.get(TOKEN);
    if (!token) {
      setIsAuth(false);
    }
  }, [pathname, isAuth]);
};
