import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Page_1 from "../../Pages/Page_1/Page_1";
import Page_2 from "../../Pages/Page_2/Page_2";

import { AuthContext } from "../../Context/Context";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 720px;
  background-color: #eeeeee;
  padding: 0;
`;

export default function MainC() {
  const context = useContext(AuthContext);
  console.log(!!context.auth);
  if (!!context.auth) {
    return (
      <Main>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/page_1">
            <Page_1 />
          </Route>
          <Route path="/page_2">
            <Page_2 />
          </Route>
          <Redirect to="/page_1" />
        </Switch>
      </Main>
    );
  }

  return (
    <Main>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </Main>
  );
}
