import React from "react";
import ClienteItem from "./ClienteItem";
const ListaClientes = ({ clientes, onDelete }) => (
  <ul style={{ padding: 0 }}>
    {clientes.map((cliente, index) => (
      <ClienteItem
        key={index}
        canDelete={cliente.canDelete}
        cliente={cliente}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default ListaClientes;
