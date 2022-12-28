import React, { useEffect } from "react";
import Head from "next/head";
import { useAppSelector } from "../hooks/react-redux";
import { useRouter } from "next/router";
import SideDrawer from "../components/side-drawer/side-drawer";
import styled from "styled-components";
import PlanCard from "../components/cards/plan-card";
import MontlyPinned from "../components/cards/monthly-pined";
import ProfileCard from "../components/cards/profile-card";
import { BounceLoader } from "react-spinners";
import {persistor} from "../store/store";

const Main = styled.main``;
const MainContainer = styled.div`
  width: calc(100% - 250px);
`;

const WrapperContainer = styled.div``;

const override = {
  display: "block",
  position: 'absolute',
  top: '50%',
  left: '50%',

};

export default function Home() {
  const user = useAppSelector((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user?.user?.token) {
      router.push("/login");
    }
  }, []);

  const logoutHandler = async () => {
      await persistor.purge();
      router.reload();
  };

  return (
    <>
      <Head>
        <title>Cient task App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="this is Client Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <Main className="row mx-0 wrapper">
        {!user?.user?.token ? (
          <BounceLoader
            loading={true}
            size={40}
            color="black"
            cssOverride={override}
          />
        ) : (
          <>
            <SideDrawer logout={logoutHandler} />
            <MainContainer className="vh-100 overflow-auto">
              <WrapperContainer className="row mx-0 vh-100">
                <PlanCard />
                <MontlyPinned />
                <ProfileCard />
              </WrapperContainer>
            </MainContainer>
          </>
        )}
      </Main>
    </>
  );
}
