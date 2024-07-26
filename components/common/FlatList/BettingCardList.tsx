import React from "react";
import { FlatList, TouchableOpacity, View, Text, Image } from "react-native";
import { BettingCardData } from "@/constants/data";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { useNavigationContext } from "@/context/NavigationContext";
import useBottomSheet from "@/hooks/useBottomSheet";

interface Item {
  id: number;
  question: string;
  logo: any;
  info: string;
  yesOdds: string;
  noOdds: string;
  isYes?: boolean;
}

const BettingCardList: React.FC = () => {
  const router = useRouter();
  const { setNavigationState } = useNavigationContext();
  const { handlePresentModalPress, handleDataTransfer } = useBottomSheet();

  const handlePress = (item: Item) => {
    setNavigationState({
      question: item.question,
      logo: item.logo,
      yesOdds: item.yesOdds,
      noOdds: item.noOdds,
      info: item.info,
      isYes: undefined,
    });
    router.push("/screen");
  };

  return (
    <FlatList
      data={BettingCardData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => handlePress(item)}
        >
          <View style={styles.header}>
            <Text style={styles.question}>{item.question}</Text>
            <Image source={item.logo} style={styles.logo} />
          </View>
          <Text style={styles.info}>{item.info}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.yesButton]}
              onPress={(e) => {
                e.stopPropagation();
                handlePresentModalPress();
                handleDataTransfer(
                  item.question,
                  item.logo,
                  item.yesOdds,
                  item.noOdds,
                  true
                );
              }}
            >
              <Text style={styles.yesText}>Yes ₹ {item.yesOdds}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.noButton]}
              onPress={(e) => {
                e.stopPropagation();
                handlePresentModalPress();
                handleDataTransfer(
                  item.question,
                  item.logo,
                  item.yesOdds,
                  item.noOdds,
                  false
                );
              }}
            >
              <Text style={styles.noText}>No ₹ {item.noOdds}</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default BettingCardList;
