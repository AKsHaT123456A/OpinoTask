import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import PriceDisplay from "./PriceDisplay";
import Slider from "./Slider";
import { DottedLine } from "./DottedLine";
import Footer from "./Footer";
import { useBalance } from "../../../../context/BalanceContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PriceIncreaseDecrease: React.FC<{
  isYes: boolean;
  noOdds: string;
  yesOdds: string;
  onPriceChange: (price: number) => void;
}> = ({ isYes, noOdds, yesOdds, onPriceChange }) => {
  const { balance, setBalance } = useBalance();
  const stake = +(isYes ? yesOdds : noOdds);
  const [price, setPrice] = useState(stake);

  useEffect(() => {
    setPrice(stake);
  }, [stake]);

  useEffect(() => {
    onPriceChange(price);
  }, [price]);

  const handleOrderPlacement =async () => {
    if (price > balance) {
     await AsyncStorage.setItem("color","red");
      return; 
    }
    const newBalance = balance - price;
    
    setBalance(newBalance);
  };

  return (
    <View style={styles.container}>
      <PriceDisplay price={price} />

      <View style={styles.sliderContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPrice((prev) => Math.max(0, prev - 0.1))}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Slider
          price={price}
          onValueChange={(value) => {
            setPrice(value);
            handleOrderPlacement();
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => setPrice((prev) => Math.min(10, prev + 0.1))}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <DottedLine />
      <Footer price={price} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#000000",
  },
  orderButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  orderButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PriceIncreaseDecrease;
