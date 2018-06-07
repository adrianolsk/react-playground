import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  ul {
    padding: 0;
    text-decoration: none;
    background-color: #ccc;
    margin: 0;
  }

  li {
    display: inline-block;
    padding: 10px;
    &:hover {
      background-color: white;
      cursor: pointer;
    }

    a {
      color: #000;
      text-decoration: none;
    }
  }
`;

const Menu = () => (
  <MenuContainer>
    <ul>
      <li>
        <Link to="/">Clientes</Link>
      </li>
      <li>
        <Link to="/sobre">Sobre</Link>
      </li>
    </ul>
  </MenuContainer>
);

export default Menu;
