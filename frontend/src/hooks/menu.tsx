import React, { createContext, useCallback, useContext, useState } from 'react';

export type Categories =
  | 'hamburgueres'
  | 'petiscos'
  | 'molhos adicionais'
  | 'saladas'
  | 'bebidas'
  | 'sobremesas';

interface MenuContextData {
  selectedCategory: Categories;
  changeMenuItemCategory: (newCategory: Categories) => void;
}

const MenuContext = createContext<MenuContextData | null>(null);

export const MenuProvider: React.FC = ({ children }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<Categories>('hamburgueres');

  const changeMenuItemCategory = useCallback((newCategory: Categories) => {
    setSelectedCategory(newCategory);
  }, []);

  return (
    <MenuContext.Provider value={{ selectedCategory, changeMenuItemCategory }}>
      {children}
    </MenuContext.Provider>
  );
};

export function useMenu(): MenuContextData {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useUserTheme must be used within an UserThemeProvider');
  }

  return context;
}
