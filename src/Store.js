import { createContext, useState } from 'react';

const initialState = {
  locationId: 1,
};

export const Context = createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
