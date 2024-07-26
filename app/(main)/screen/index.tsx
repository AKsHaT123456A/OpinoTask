// BettingScreen.js
import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
  StatusBar,
  useColorScheme,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import CustomHeader from "./customHeader";
import IPLCard from "@/components/common/Card/IPLCard";
import BetCard from "@/components/common/Card/BetCard";
import AboutCard from "@/components/common/Card/AboutCard";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import BottomSheetMainContainer from "@/components/common/BottomSheet/BottomSheetMain";
import useBackHandler from "@/hooks/useBackHandler";
import useBottomSheet from "@/hooks/useBottomSheet";
import { useNavigationContext } from "@/context/NavigationContext";
import { COLORS } from "@/constants";
import ChartCard from "@/components/chart/ChartCard";

const BettingScreen: React.FC = () => {
  const { navigationState } = useNavigationContext();
  const question = navigationState.question || "";
  const yesOdds = navigationState.yesOdds || "";
  const logo = navigationState.logo || "";
  const noOdds = navigationState.noOdds || "";
  const info = navigationState.info || "";

  const router = useRouter();
  const {
    bottomSheetModalRef,
    handlePresentModalPress,
    handleCloseBottomSheet,
    handleDataTransfer,
    isYes,
    bottomSheetQuestion,
    bottomSheetLogo,
    bottomSheetYesOdds,
    bottomSheetNoOdds,
    snapPoints,
    renderBackdrop,
    handleSheetChanges,
  } = useBottomSheet();
  useBackHandler();
  const colorScheme = useColorScheme();

  useEffect(() => {
    const backAction = () => {
      router.replace("/(tabs)");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [router]);

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
          backgroundColor={colorScheme === "dark" ? "#000" : "#fff"}
        />
        <Stack.Screen options={{ headerShown: false }} />
        <CustomHeader
          onBackPress={() => router.replace("/(tabs)")}
          onSharePress={() => {}}
          title="Event 8625"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <IPLCard question={question} info={info} />
            <ChartCard />
            <BetCard />
            <AboutCard />
            <View style={styles.container}>
              <TouchableOpacity
                style={[styles.button, styles.yesButton]}
                onPress={() => {
                  handlePresentModalPress();
                  handleDataTransfer(question, logo, yesOdds, noOdds, true);
                }}
              >
                <Text style={styles.buttonText}>Yes ₹ {yesOdds}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.noButton]}
                onPress={() => {
                  handlePresentModalPress();
                  handleDataTransfer(question, logo, yesOdds, noOdds, false);
                }}
              >
                <Text style={styles.buttonText}>No ₹ {noOdds}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            <BottomSheetMainContainer
              isYes={isYes}
              question={bottomSheetQuestion}
              logo={bottomSheetLogo}
              yesOdds={bottomSheetYesOdds}
              noOdds={bottomSheetNoOdds}
              closeBottomSheet={handleCloseBottomSheet}
            />
          </BottomSheetView>
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 10,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: "50%",
    paddingVertical: 20,
    borderRadius: 16,
    marginHorizontal: 4,
  },
  yesButton: {
    backgroundColor: "#1a73e8",
    textAlign: "center",
    borderColor: "lightblue",
    borderWidth: 3,
  },
  noButton: {
    backgroundColor: "#34a853",
    borderColor: "lightgreen",
    borderWidth: 3,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default BettingScreen;
