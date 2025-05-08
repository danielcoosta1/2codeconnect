// src/components/ContainerMain/index.jsx
import React from "react";
import { ContainerEstilizado } from "./styles";
import SideBar from "../SideBar";

const ContainerMain = ({ children }) => {
  return (
    <ContainerEstilizado>
      <SideBar />
      <main>{children}</main>
    </ContainerEstilizado>
  );
};

export default ContainerMain;
