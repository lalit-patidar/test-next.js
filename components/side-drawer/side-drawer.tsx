import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const navigationOption = [
  {
    name: "Dashboard",
    icon: 'fas fa-signal'
  },
  {
    name: "Education",
    icon: 'fas fa-circle'
  },
  {
    name: "Resources",
    icon: 'fas fa-address-book'
  },
  {
    name: "Settings",
    icon: 'fas fa-cog'
  },
];

const Nav = styled.nav`
  width: 250px;
`;
const Wrapper = styled.div``;
const ListWrapper = styled.ul`
  background-color: #eee6e2;
`;

const List = styled.li`
  &:active {
    background-color: #eee6e2;
  }
`;

const ResourcesList = styled.ul`
  font-size: 12px;
`;

const Logout = styled.span`
  height: 28px;
  width: 28px;
  font-size: 10px;
`;

const ResourceBtn = styled.button`
 &:after {
  position: absolute;
  right: 0;
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform .35s ease;
  transform-origin: 0.5em 50%;
 };

 &[aria-expanded="true"]:after {
  transform: rotate(90deg);
  transition: transform .35s ease;
  transform-origin: 0.5em 50%;
`;

const SideDrawer = (props:any) => {
  const [showRes, setShowRes] = useState(false);

  const showResHandler = () => {
    setShowRes(prev => !prev)
  }
  return (
    <nav
      className="text-dark px-0 vh-100 overflow-auto menu-bar"
      style={{ width: "250px" }}
    >
      <div className="d-flex flex-column flex-shrink-0  flex-shrink-0 p-4 h-100">
        <a
          href="/"
          className="text-center  mx-auto link-dark text-decoration-none"
        >
          <Image
            className="d-flex mx-auto"
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
          <span className="d-block mt-1 fs-5 fw-semibold text-uppercase fw-bold">
            Solarius
          </span>
        </a>
        <ul className="list-unstyled ps-0 pt-3 mt-4 mb-auto nav-links-hover">
          {navigationOption.map((item, index) => {
            if (item.name === "Resources") {
              return (
                <li className="mb-1">
                  <ResourceBtn
                    onClick={showResHandler}
                    className="btn btn-toggle d-flex align-items-center position-relative text-start w-100 rounded text-black fw-bold collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard-collapse"
                    aria-expanded="false"
                  >
                    <i className={`me-2 ${item.icon}`}></i>
                    Resources
                  </ResourceBtn>
                  <div className={`collapse ${showRes ? "show" : ""}`} id="dashboard-collapse">
                    <ResourcesList className="btn-toggle-nav list-unstyled fw-normal pb-1 ps-4 small">
                      <li className="py-2 px-2">
                        <a
                          href="#"
                          className="d-block w-100 link-dark rounded text-decoration-none"
                        >
                          Genetics 101
                        </a>
                      </li>
                      <li className="py-2 px-2">
                        <a
                          href="#"
                          className="d-block w-100 link-dark rounded text-decoration-none"
                        >
                          DNA Synthesis
                        </a>
                      </li>
                      <li className="py-2 px-2">
                        <a
                          href="#"
                          className="d-block w-100 link-dark rounded text-decoration-none"
                        >
                          Events
                        </a>
                      </li>
                    </ResourcesList>
                  </div>
                </li>
              );
            } else {
              return (
                <li className="mb-1" style={{backgroundColor: item.name === 'Dashboard' ? "#eee6e2": "transparent"}} key={item+index}>
                  <a
                    href="#"
                    className="btn text-start rounded text-black fw-bold"
                  >
                    <i className={`me-2 ${item.icon}`}></i>
                    {item.name}
                  </a>
                </li>
              );
            }
          })}
        </ul>
        <div>
          <button className="btn text-start rounded text-black fw-bold" onClick={() => props.logout()}>
            <Logout className="d-inline-flex align-items-center justify-content-center rounded-circle text-white bg-black me-2">
              <i className="fas fa-sign-out-alt"></i>
            </Logout>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SideDrawer;
