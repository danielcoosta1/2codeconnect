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
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const links = [
    { name: "Feed", path: "/", src: feedIcon },
    { name: "Perfil", path: "/perfil", src: accountIcon },
    { name: "Sobre nós", path: "/promocoes", src: infoIcon },
    { name: "Sair", path: "/login", src: logoutIcon },
  ];

  return (
    <SidebarContainer>
      <LogoImg src={logoImg} alt="Logo CodeConnect" />
      <Nav>
        <ListaNav>
          <ItemListaNav>
            <LinkPublicarEstilizado>Publicar</LinkPublicarEstilizado>
          </ItemListaNav>
          {links.map((link, index) => (
            <ItemListaNav key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "ativo" : "")}
              >
                <img src={link.src} />
                <p>{link.name}</p>
              </NavLink>
            </ItemListaNav>
          ))}
        </ListaNav>
      </Nav>
    </SidebarContainer>
  );
};

export default SideBar;
