import Home from "../components/screens/home/Home";
import Cards from "../components/screens/cards/Cards";
import Activity from "../components/screens/activity/Activity";
import Recipients from "../components/screens/recipients/Recipients";
import Help from "../components/screens/help/Help";
import Earn from "../components/screens/earn/Earn";
import Auth from "../components/screens/auth/Auth";

export const routes = [
  {
    path: "/",
    component: Home,
    isAuth: true,
  },
  {
    path: "/cards",
    component: Cards,
    isAuth: true,
  },
  {
    path: "/activity",
    component: Activity,
    isAuth: true,
  },
  {
    path: "/recipients",
    component: Recipients,
    isAuth: true,
  },
  {
    path: "/help",
    component: Help,
    isAuth: true,
  },
  {
    path: "/earn",
    component: Earn,
    isAuth: true,
  },
  {
    path: "/auth",
    component: Auth,
    isAuth: false,
  },
];
