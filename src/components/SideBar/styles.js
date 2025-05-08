// src/components/SideBar/styles.js
import { NavLink } from "react-router-dom";
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
      text-decoration: underline;
      color: #ffffff;

      img {
        filter: brightness(1.2);
      }

      p {
        font-weight: bold;
      }
    }
  }
`;

export const LinkPublicarEstilizado = styled(NavLink)`
  color: #81fe88;
  border: 1px solid #81fe88;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
  &.active {
    background-color: #81fe88;
    color: #171d1f;
    font-weight: bold;
  }
`;

export const LogoImg = styled.img``;
