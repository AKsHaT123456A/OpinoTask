// context/BalanceContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface BalanceContextProps {
  balance: number;
  order: boolean;
  setBalance: (balance: number) => void;
  setOrder: (order: boolean) => void;
}

const BalanceContext = createContext<BalanceContextProps | undefined>(
  undefined
);

const BalanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [balance, setBalanceState] = useState<number>(400);
  const [order, setOrderState] = useState<boolean>(false);

  useEffect(() => {
    const loadBalance = async () => {
      try {
        const savedBalance = await AsyncStorage.getItem("balance");
        if (savedBalance !== null) {
          setBalanceState(Number(savedBalance));
        }
      } catch (error) {
        console.error("Failed to load balance from storage:", error);
      }
    };

    loadBalance();
  }, []);

  const setBalance = async (newBalance: number) => {
    try {
        setBalanceState(newBalance);
    } catch (error) {
      console.error("Failed to save balance to storage:", error);
    }
  };

  const setOrder = (newOrder: boolean) => {
    setOrderState(newOrder);
  };

  return (
    <BalanceContext.Provider value={{ balance, order, setBalance, setOrder }}>
      {children}
    </BalanceContext.Provider>
  );
};

const useBalance = () => {
  const context = React.useContext(BalanceContext);
  if (context === undefined) {
    throw new Error("useBalance must be used within a BalanceProvider");
  }
  return context;
};

export { BalanceProvider, useBalance };
