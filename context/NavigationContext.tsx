import React, { createContext, useState, useContext, ReactNode } from 'react';

interface NavigationContextType {
  navigationState: {
    question?: string;
    logo?: string;
    yesOdds?: string;
    noOdds?: string;
    isYes?: boolean;
    info?: string;
  };
  setNavigationState: (state: {
    question?: string;
    logo?: string;
    yesOdds?: string;
    noOdds?: string;
    isYes?: boolean;
    info?: string;
  }) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [navigationState, setNavigationState] = useState({
    question: '',
    logo: '',
    yesOdds: '',
    noOdds: '',
    isYes: false,
  });

  return (
    <NavigationContext.Provider value={{ navigationState, setNavigationState }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
};
