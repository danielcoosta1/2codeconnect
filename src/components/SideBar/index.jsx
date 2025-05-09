// src/components/SideBar/index.jsx
import React from "react";

import {
  ItemListaNav,
  LinkPublicarEstilizado,
  ListaNav,
  LogoImg,
  Nav,
  SidebarContainer,
} from "./styles";

// src/components/SideBar/index.jsx
import logoImg from "./assets/Logo.svg";
import feedIcon from "./assets/feed.svg";
import accountIcon from "./assets/account_circle.svg";
import infoIcon from "./assets/info.svg";
import logoutIcon from "./assets/logout.svg";

import feedIconWhite from "./assets/feedwhite.svg";
import accountIconWhite from "./assets/account_circlewhite.svg";
import infoIconWhite from "./assets/infowhite.svg";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const SideBar = () => {
  const { logout } = useAuth();
  const links = [
    {
      name: "Feed",
      path: "/feed",
      src: feedIcon,
      src2: feedIconWhite,
      onclick: null,
    },
    {
      name: "Perfil",
      path: "/perfil",
      src: accountIcon,
      src2: accountIconWhite,
      onclick: null,
    },
    {
      name: "Sobre nós",
      path: "/promocoes",
      src: infoIcon,
      src2: infoIconWhite,
      onclick: null,
    },
    {
      name: "Sair",
      path: "/login",
      src: logoutIcon,
      src2: null,
      onclick: logout,
    },
  ];

  return (
    <SidebarContainer>
      <LogoImg src={logoImg} alt="Logo CodeConnect" />
      <Nav>
        <ListaNav>
          <LinkPublicarEstilizado
            to="/publicar"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Publicar
          </LinkPublicarEstilizado>

          {links.map((link, index) => (
            <ItemListaNav key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={link.onclick}
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive && link.src2 ? link.src2 : link.src}
                      alt={link.name}
                    />
                    <p>{link.name}</p>
                  </>
                )}
              </NavLink>
            </ItemListaNav>
          ))}
        </ListaNav>
      </Nav>
    </SidebarContainer>
  );
};

export default SideBar;
