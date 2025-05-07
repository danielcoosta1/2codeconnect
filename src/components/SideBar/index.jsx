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

import logoImg from "./assets/Logo.svg";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Feed", path: "/", src: "./assets/feed.svg" },
  { name: "Perfil", path: "/perfil", src: "./assets/account_circle.svg" },
  { name: "Sobre nós", path: "/promocoes", src: "./assets/info.svg" },
  { name: "Sair", path: "/produtos", src: "./assets/logout.svg" },
];

const SideBar = () => {
  return (
    <SidebarContainer>
      <LogoImg src={logoImg} alt="Logo CodeConnect" />
      <Nav>
        <ListaNav>
          <ItemListaNav>
            <LinkPublicarEstilizado>Publicar</LinkPublicarEstilizado>
          </ItemListaNav>
          <ItemListaNav>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? "ativo" : "")}
                >
                  <p>{link.name}</p>
                  <img src={link.src}/>
                </NavLink>
              </li>
            ))}
          </ItemListaNav>
        </ListaNav>
      </Nav>
    </SidebarContainer>
  );
};

export default SideBar;
