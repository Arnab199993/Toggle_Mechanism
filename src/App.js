import React, { useState } from "react";
const app = () => {
  const [toggle, settoggle] = useState(false);
  const click = () => {
    settoggle(!toggle);
  };
  return (
    <div>
      <button onClick={click}>button</button>
      {toggle && <h1>HI</h1>}
    </div>
  );
};
export default app;
