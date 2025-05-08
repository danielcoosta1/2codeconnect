// src/components/SideBar/styles.js
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 177px;
  height: 100vh;
  background-color: #171d1f;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 2rem 1rem;
`;

export const Nav = styled.nav``;

export const ListaNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ItemListaNav = styled.li`
  a {
    color: #888888;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }

    &.active {
      color: #ffffff;
    }
  }
`;

export const LinkPublicarEstilizado = styled.a``;

export const LogoImg = styled.img``;
