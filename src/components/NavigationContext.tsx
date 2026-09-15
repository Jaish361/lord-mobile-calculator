import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

interface NavigationContextType {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState('/');

  const value = useMemo(() => ({
    selectedPage,
    setSelectedPage,
  }), [selectedPage]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used inside a NavigationProvider');
  }
  return context;
};
