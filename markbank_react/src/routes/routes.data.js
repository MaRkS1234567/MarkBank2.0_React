import Home from "../components/screens/home/Home";
import Cards from "../components/screens/cards/Cards";
import Activity from "../components/screens/activity/Activity";
import Recipients from "../components/screens/recipients/Recipients";
import Help from "../components/screens/help/Help";
import Earn from "../components/screens/earn/Earn";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cards",
    component: Cards,
  },
  {
    path: "/activity",
    component: Activity,
  },
  {
    path: "/recipients",
    component: Recipients,
  },
  {
    path: "/help",
    component: Help,
  },
  {
    path: "/earn",
    component: Earn,
  },
];
