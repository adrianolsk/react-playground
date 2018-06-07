import React from "react";

const Contador = ({ total, onAdd }) => (
  <div>
    <button onClick={i => onAdd(-1)}>-</button>
    total: {total}
    <button onClick={i => onAdd(1)}>+</button>
  </div>
);

export default Contador;
