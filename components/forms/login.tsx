import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Input = styled.input`
width: 80%;
border: 1px solid #eee;
outline: none;
padding:  15px;
margin-top: 10px;
`;
const ErrorMsg = styled.p`
color: red;
font-size: 14px;
`;

const Login = (props:any) => {
  const { email, password } = props.formData.error;
  return (
    <Wrapper>
      <Input
        type="text"
        name="email"
        value={props.email}
        onChange={props.onChange}
        placeholder="email"
      />
      {email && <ErrorMsg>{email}</ErrorMsg>}
      <Input
        type="password"
        name="password"
        value={props.password}
        onChange={props.onChange}
        placeholder="password"
      />
      {password && <ErrorMsg>{password}</ErrorMsg>}
    </Wrapper>
  );
};

export default Login;