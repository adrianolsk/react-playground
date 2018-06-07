import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Item = styled.li`
  margin-bottom: 2px;
  display: grid;
  grid-template-columns: 1fr 100px;
  border: solid 1px;
  padding: 20px;
  color: #006699;
  align-items: center;
`;

const ClienteItem = ({ cliente, onDelete, canDelete = true }) => (
  <Item>
    {cliente.nome} {cliente.sobrenome}
    {canDelete && (
      <Button corTexto="white" cor="red" onClick={() => onDelete(cliente)}>
        deletar
      </Button>
    )}
  </Item>
);
export default ClienteItem;
