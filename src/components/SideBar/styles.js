// src/components/SideBar/styles.js
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 177px;
  height: 100vh;
  background-color: #171d1f;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  color: #888888;
`;

export const Nav = styled.nav``;

export const ListaNav = styled.ul``;

export const ItemListaNav = styled.li`
  &.ativo {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const LinkPublicarEstilizado = styled.a``;

export const LogoImg = styled.img``;
