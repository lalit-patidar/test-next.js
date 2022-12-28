import Head from 'next/head'
import styled from 'styled-components';
import Image from 'next/image';
import {useAppDispatch, useAppSelector} from '../hooks/react-redux';
import {loginUser} from '../store/slice/auth'
import {formValidation, hello, textInputChange} from "../store/slice/login-form"
import {useRouter} from 'next/router';
import LoginForm from '../components/forms/login';
import { BounceLoader } from "react-spinners";


const Main = styled.main`
width: 100%;
height: 100vh;
background-color: #eee;
display: flex;
justify-content: center;
align-items: center;
background-color: #fbf7f4;
`;
const FormWrapper = styled.div`
width:500px;
height: 500px;
background-color: #fff;
border-radius: 10px;
box-shadow: -3px 1px 25px 2px rgba(0,0,0,0.35);
margin-top: 6rem;
@media screen and (max-width: 480px) {
  width: 80%;
  height: 400px;
};
`;
const Button = styled.button`
width: 80%;
background-color: black;
border: none;
border-radius: 5px;
cursor: pointer;
color: white;
padding: 12px;
margin: 30px 0 20px 10%;
outline: none;
font-family: Nunito-Bold;
font-Size: 18px;
`;
const LogoWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100px;
margin-bottom: 50px;
padding-top: 30px;
@media screen and (max-width: 480px) {
  width: 80%;
};
`;

const LogoTitle = styled.p`
color: black;
font-size: 18px;
font-weight: bold;
margin-top: 10px;
`

const override = {
  display: "block",
  marginLeft: "250px",
  marginTop: "50px",

};

const Login = (props:any) => {

    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);
    const {isFetching} = useAppSelector(state => state.user);
    const {formErrors, formValidity, formValues} = useAppSelector(state => state.form);
    const router = useRouter();

    if(user?.user.token) {
       router.push('/');
    }

    const onSubmitHandler = () => {
      if (Object.values(formValidity).every(Boolean)) {
         dispatch(loginUser(formValues));
      } else {
        for (let key in formValues) {
          let target = {
            name: key,
            value: formValues[key],
          };
          dispatch(formValidation(target));
        }
      }
    };
  
    const onChangeHandler = (event:any) => {
      const { name, value } = event.target;
      dispatch(textInputChange({name, value}))
    };
  
  
  
    return (
      <>
      <Head>
        <title>Login</title>
        <meta name="description" content="This is login page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <FormWrapper>
          <LogoWrapper>
            <Image
                src="/logo.png"
                alt="client Logo"
                width={50}
                height={50}
                priority
              />
              <LogoTitle>Solarius</LogoTitle>
          </LogoWrapper>
          <LoginForm
            onChange={onChangeHandler}
            formData={{ error: formErrors, validity: formValidity }}
          />
          {!isFetching ? (
            <Button onClick={onSubmitHandler}>SignIn</Button>
          ) : (
            <BounceLoader loading={true} size={40} color="black" cssOverride={override} />
          )}
        </FormWrapper>
      </Main>
      </>
    );
  };

  export default Login;
  



