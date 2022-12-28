import React from "react";
import styled from "styled-components";
import Image from "next/image";

const MainWrapper = styled.div`
  height: calc(100% - 2rem);
`;

const ProfileWrapper = styled.span`
  height: 55px;
  width: 55px;
`;

const Span = styled.span`
  height: 45px;
  width: 45px;
`;

const Link = styled.a`
&:focus {
  box-shadow: none;
  border: none;
};

&:hover {
  box-shadow: none;
  border: none;
};
`


const Profile = () => {
  return (
    <div className="col-lg-2">
      <MainWrapper className="d-flex flex-column flex-shrink-0 my-3 border-start">
        <div className="text-center mb-auto profile-ic mt-3">
          <Link
            href="#"
            className="btn text-start rounded text-black fw-bold add-icon"
          >
            <ProfileWrapper className="d-inline-flex align-items-center justify-content-center rounded-circle text-black bg-white position-relative">
              <Image
                className="small h-100 w-100 rounded-circle"
                src="/profile-icon.png"
                alt="Profile"
                width={80}
                height={80}
              />
            </ProfileWrapper>
          </Link>
          <h6 className="fw-bold mb-1">Dr. Riddle</h6>
          <p className="small">Scientist</p>
        </div>
        <div className="text-center">
          <Link
            href="#"
            className="d-block btn text-center rounded text-black fw-bold add-icon"
          >
            <Span className="d-inline-flex align-items-center justify-content-center rounded-circle text-black bg-white">
              <i className="fas fa-edit"></i>
            </Span>
          </Link>
          <Link
            href="#"
            className="d-block btn text-center rounded text-black fw-bold add-icon"
          >
            <Span className="d-inline-flex align-items-center justify-content-center rounded-circle text-black bg-white">
              <i className="fas fa-envelope"></i>
            </Span>
          </Link>
          <a
            href="#"
            className="d-block btn text-center rounded text-black fw-bold add-icon"
          >
            <Span className="d-inline-flex align-items-center justify-content-center rounded-circle text-white bg-black">
              <i className="fas fa-plus"></i>
            </Span>
          </a>
        </div>
      </MainWrapper>
    </div>
  );
};

export default Profile;
