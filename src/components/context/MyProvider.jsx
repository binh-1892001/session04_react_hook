import { createContext } from "react";

export const MyContext = createContext();

function MyProvider({ children }) {
  const data = { name: "useContext" };
  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}

export default MyProvider;
