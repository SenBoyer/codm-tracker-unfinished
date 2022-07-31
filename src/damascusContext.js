import { createContext } from "react";

export const damascusProgress = createContext();

const damascusProgressProvider = function ({ children }) {
  return (
    <damascusProgressProvider.Provider value={{ count: 1 }}>
      {children}
    </damascusProgressProvider.Provider>
  );
};
