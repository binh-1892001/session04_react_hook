import { memo } from "react";

function ContextCallBack({ incrementCount }) {
  console.log("render component button");
  return <button onClick={incrementCount}>Tăng</button>;
}

export default memo(ContextCallBack);
