import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  border: solid 1px;
  padding: 15px;
  background-color: ${props => props.cor || "white"};
  color: ${props => props.corTexto || "black"};
`;

export default Button;
