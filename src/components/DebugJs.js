import React from "react";

const DebugJs = ({ valor }) => (
  <pre style={{ backgroundColor: "#ccc", padding: 20 }}>
    {JSON.stringify(valor, null, 2)}
  </pre>
);

export default DebugJs;
