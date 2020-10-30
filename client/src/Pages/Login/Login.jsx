import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/Context";
import styled from "styled-components";
import { Redirect } from "react-router";

const Form = styled.form`
  background: #fff;
  min-width: 300px;
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: darkgrey;
  margin: 0 1em;
  box-shadow: 16px 14px 17px 0px #00000063, -13px -14px 20px 5px #ffffffc9;
  padding: 20px;
`;

const InputField = styled.input`
  background: transparent;
  border: 1px solid #666666;
  border-radius: 5px;
  margin: 1em 0;
  padding: 10px;
`;

const Typography = styled.p`
  box-sizing:border-box;
  color:red; 
  width: 100%;
  margin: 10px 0;
  padding: 3px;
  border: 1px solid red;
`;

const Button = styled.button`
  box-sizing:border-box;
  width: 100%;
  margin: 10px 0;
  padding: 10px 19px;
  border-radius: 5px;
  border: 1px solid #666666;
  transition: 0.3s linear;

  &:hover {
    background-color: transparent;
    transition: 0.3s linear;
box-shadow: 1px 1px 10px 1px #cfcccc;
  }
`;



export default function SignIn() {
  const [email, setemail] = useState("n@s.ru");
  const [password, setpassword] = useState("11111111");
  const [remember, setremember] = useState(false);

  const context = useContext(AuthContext);

  const submitHAndler = (e) => {
    e.preventDefault();
    context.authFetch(email, password, remember);
  };

  if (!!context.auth) {
    return <Redirect to="/page_1" />
  }


  return (
    <div>
      <Form onSubmit={(e) => submitHAndler(e)}>
        <h1>SignIn</h1>
        <InputField
          type="email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
          name="email"
        />
        <InputField
          type="password"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          name="password"
        />
        <label>
          <input type="checkbox" onChange={() => {setremember(!remember)}}></input>
          remember
        </label>
        <Button type="submit">SignIn</Button>

      {context.errors && context.errors.map((item,i) => {
        return (
          <Typography key={i}>{item}</Typography>
        )
      })}
      </Form>
    </div>
  );
}
