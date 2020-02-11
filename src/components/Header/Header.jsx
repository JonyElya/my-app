import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={style.header}>
      <img src="https://cdn.shopifycloud.com/hatchful-web/assets/0079f3ae8b76c255980f84026ec74f47.svg" />
      <div className={style.Login_block}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        <div className="">{props.email}</div>
        
      </div>
    </header>
  );
};
export default Header;
