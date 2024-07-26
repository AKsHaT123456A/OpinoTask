import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import Navbar from "@/components/Navbar";
import { styles } from "./style";
import { BannerData, BettingCardData } from "@/constants/data";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";
import BottomSheetMainContainer from "@/components/common/BottomSheet/BottomSheetMain";
import { useRouter } from "expo-router";
import BannerFlatList from "@/components/common/FlatList/BannerFlatList";
import TrendingNowFlatList from "@/components/common/FlatList/TrendingFlatList";
import useBackHandler from "@/hooks/useBackHandler";
import useBottomSheet from "@/hooks/useBottomSheet";
import { useNavigationContext } from "@/context/NavigationContext";
interface Item {
  id: number;
  question: string;
  logo: any;
  info: string;
  yesOdds: string;
  noOdds: string;
  isYes?: boolean;
}
const HomeScreen: React.FC = () => {
  const router = useRouter();
  const { setNavigationState } = useNavigationContext();
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

  const handlePress = (item:Item) => {
    setNavigationState({
      question: item.question,
      logo: item.logo,
      yesOdds: item.yesOdds,
      noOdds: item.noOdds,
      info: item.info,
      isYes,
    });
    router.push("/screen")
  };
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Navbar />
          <View style={styles.carouselContainer}>
            <CustomCarousel
              data={BannerData}
              autoPlay={true}
            />
          </View>
          <View style={styles.bannerFlatListContainer}>
            <BannerFlatList />
          </View>
          <Text style={styles.heading}>Trending Now</Text>
          <TrendingNowFlatList />
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
                    <Text style={styles.noText}>NO ₹ {item.noOdds}</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
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
      </View>
    </BottomSheetModalProvider>
  );
};

export default HomeScreen;
