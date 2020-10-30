import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";

export default function Header() {
  const context = useContext(AuthContext);
  return (
    <header className="header">
      <div class="header__container container">
      {context.auth ? <nav>
        <NavLink to='/page_1'>Page 1</NavLink>
        <NavLink to='/page_2'>Page 2</NavLink>
      </nav> : <p>Войдите или зарегистрируйтесь</p>}
      <div class="header__user_nav">
        {context.auth && 
          <p>{`${context.auth && context.auth.email}`}</p>
        }
        {context.auth && context.auth.email && (
          <a onClick={() => context.signUpFetch(context.auth.token)}>
            LogOut
          </a>
        )}
      </div>

      </div>
    </header>
  );
}
