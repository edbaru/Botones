import React, { createContext, useContext, useState, ReactNode } from 'react';

type ItemsContextType = {
  items: number[];
  aumentar: () => void;
  reducir: () => void;
};

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItems debe usarse dentro de ItemsProvider');
  }
  return context;
};

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<number[]>([]);

  const aumentar = () => setItems([...items, items.length + 1]);
  const reducir = () => setItems(items.slice(0, -1));

  return (
    <ItemsContext.Provider value={{ items, aumentar, reducir }}>
      {children}
    </ItemsContext.Provider>
  );
};
