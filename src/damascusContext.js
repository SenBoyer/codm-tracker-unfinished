import { createContext, useState } from "react";

export const damascusProgress = createContext();

const DamascusProgressProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <damascusProgress.Provider value={{ count, setCount }}>
      {children}
    </damascusProgress.Provider>
  );
};

export default DamascusProgressProvider;
