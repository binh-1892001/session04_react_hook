import "./App.css";

import { useCallback, useState } from "react";

import ContextCallBack from "./components/useCallBackDemo/ContextCallBack";

// import BackToTop from "./components/back_to_top/BackToTop";
// import MyComponent from "./components/context/MyComponent";
// import { MyContext } from "./components/context/MyProvider";

// import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <div>
        {console.log("render app")}
        <ContextCallBack incrementCount={incrementCount} />
        <p>{count}</p>
      </div>
    </>
  );
}

export default App;
