import styles from "./TopBar.module.scss";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <div className={styles.ul}>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "black" : "",
          };
        }}
      >
        Summary
      </NavLink>
      <NavLink
        to="/anotherPage"
        style={({ isActive }) => {
          return {
            color: isActive ? "black" : "",
          };
        }}
      >
        Cards
      </NavLink>
      <NavLink
        to="/anotherPage"
        style={({ isActive }) => {
          return {
            color: isActive ? "black" : "",
          };
        }}
      >
        Activity
      </NavLink>
      <NavLink
        to="/anotherPage"
        style={({ isActive }) => {
          return {
            color: isActive ? "black" : "",
          };
        }}
      >
        Recipients
      </NavLink>
      <NavLink
        to="/anotherPage"
        style={({ isActive }) => {
          return {
            color: isActive ? "black" : "",
          };
        }}
      >
        Help center
      </NavLink>
      <NavLink
        to="/anotherPage"
        style={({ isActive }) => {
          return {
            color: isActive ? "black" : "",
          };
        }}
      >
        Earn gift
      </NavLink>
    </div>
  );
};

export default TopBar;
