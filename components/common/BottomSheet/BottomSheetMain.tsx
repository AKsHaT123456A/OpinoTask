import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import YesNoSwitch from "./YesNoSwitch";
import PriceIncreaseDecrease from "./PriceIncreaseDecrease/PriceIncreaseDecrease";
import SwipeButton from "./SwipeButton";
import AvailableBalance from "./AvailableBalance";
import { BalanceProvider } from "@/context/BalanceContext";

const BottomSheetMainContainer = ({
  question,
  logo,
  yesOdds,
  noOdds,
  isYes,
  closeBottomSheet,
}: {
  question: string;
  logo: any;
  yesOdds: string;
  isYes: boolean;
  noOdds: string;
  closeBottomSheet: () => void;
}) => {
  const [toggleState, setToggleState] = useState(isYes);
  const [balance, setBalance] = useState(400);
  const handleToggle = (value: boolean) => {
    setToggleState(value);
  };

  const handlePriceChange = (price: number) => {
    setBalance(balance - price);
    
    // This function can be used to handle price changes
  };

  return (
    <BalanceProvider >
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>{question}</Text>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={{ height: Dimensions.get("window").height / 12 }}>
          <YesNoSwitch isYes={toggleState} onToggle={handleToggle} />
        </View>
        <PriceIncreaseDecrease
          noOdds={noOdds}
          yesOdds={yesOdds}
          isYes={toggleState}
          onPriceChange={handlePriceChange}
        />
        <SwipeButton
          isYes={toggleState}
          onToggle={handleToggle}
          closeBottomSheet={closeBottomSheet}
        />
        <AvailableBalance balance={balance}/>
      </View>
    </BalanceProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
  headingContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "contain",
  },
});

export default BottomSheetMainContainer;
