import React from 'react';
import { Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AvailableBalance: React.FC = () => {
  const [balance, setBalance] = React.useState<string>('0.00'); 
  const [color, setColor] = React.useState<string | null>('black');
  React.useEffect(() => {
    const fetchBalance = async () => {
      try {        
        const storedBalance = await AsyncStorage.getItem('balance');
        const color = await AsyncStorage.getItem("color");
        setColor(color);
        const formattedBalance = storedBalance ? Number(storedBalance).toFixed(2) : '0.00';
        setBalance(formattedBalance);
      } catch (error) {
        console.error('Failed to fetch balance from storage:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <Text style={[styles.text,{color: color || 'black'}]}>Available Balance: ₹{balance}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: 'light',
  },
});

export default AvailableBalance;
