import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";

export default function Header() {
  const context = useContext(AuthContext);
  return (
    <footer className="footer">
      <div className="footer__container">
        <span>
          © Все права защищены <a href="https://github.com/zotiken">ZOTIKEN</a>{" "}
          2020
        </span>

        {context.auth ? (
          <nav>
            <p>Успех — это ещё не точка, неудача — это ещё не конец</p>
          </nav>
        ) : (
          <p>Войдите или зарегистрируйтесь</p>
        )}
        <div class="header__user_nav">
          {context.auth && <p>{`${context.auth && context.auth.email}`}</p>}
          {context.auth && context.auth.email && (
            <a onClick={() => context.signUpFetch(context.auth.token)}>
              LogOut
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
