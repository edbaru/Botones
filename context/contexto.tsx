import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type ItemsContextType = {
  items: number[];
  dispatch: (action: {type: string}) => void;
};

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

const reducer = (state: number[], action: {type: string}) => {
  switch (action.type) {
    case 'AUMENTAR':
      return [...state, state.length + 1];
    case 'REDUCIR':
      return state.slice(0, -1);
    default:
      return state;
  }
};

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItems debe usarse dentro de ItemsProvider');
  }
  return context;
};

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [items, dispatch] = useReducer(reducer, []);

  return (
    <ItemsContext.Provider value={{ items, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
};