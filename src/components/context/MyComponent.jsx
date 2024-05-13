import React, { useContext } from "react";

import { MyContext } from "./MyProvider";

function MyComponent() {
  const data = useContext(MyContext);

  return <div>{data.name}</div>;
}

export default MyComponent;
