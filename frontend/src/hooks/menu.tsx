import React, { createContext, useCallback, useContext, useState } from 'react';

export type Categories =
  | 'hamburgueres'
  | 'petiscos'
  | 'molhos adicionais'
  | 'saladas'
  | 'bebidas'
  | 'sobremesas';

export type CategoriesTexts = 'Burguers' | 'Batatas' | 'Bebidas' | 'Sobremesas';

interface MenuContextData {
  selectedCategory: Categories;
  changeMenuItemCategory: (newCategory: Categories) => void;
  selectedCategoryText: CategoriesTexts;
  changeMenuItemCategoryText: (newCategory: CategoriesTexts) => void;
}

const MenuContext = createContext<MenuContextData | null>(null);

export const MenuProvider: React.FC = ({ children }) => {
  const [selectedCategory, setSelectedCategory] =
    useState<Categories>('hamburgueres');
  const [selectedCategoryText, setselectedCategoryText] =
    useState<CategoriesTexts>('Burguers');

  const changeMenuItemCategory = useCallback((newCategory: Categories) => {
    setSelectedCategory(newCategory);
  }, []);

  const changeMenuItemCategoryText = useCallback(
    (newCategory: CategoriesTexts) => {
      setselectedCategoryText(newCategory);
    },
    [],
  );

  return (
    <MenuContext.Provider
      value={{
        selectedCategory,
        changeMenuItemCategory,
        selectedCategoryText,
        changeMenuItemCategoryText,
      }}
    >
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
