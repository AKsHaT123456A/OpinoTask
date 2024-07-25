
import React, { useCallback, useMemo, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
} from "react-native";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import Navbar from "@/components/Navbar";
import {
  BannerFlatList,
  TrendingNowFlatList,
} from "@/components/common/FlatLists";
import { BannerData, BettingCardData } from "@/constants/data";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetModalProvider,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";

const HomeScreen: React.FC = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => [(Dimensions.get('window').height / 4), (Dimensions.get('window').height)/2], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const renderBackdrop = useCallback(
    (props:any) => <BottomSheetBackdrop {...props} />,
    []
  );

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Navbar />
          <View style={styles.carouselContainer}>
            <CustomCarousel
              data={BannerData}
              pagination={false}
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
              <View style={styles.card}>
                <View style={styles.header}>
                  <Text style={styles.question}>{item.question}</Text>
                  <Image source={item.logo} style={styles.logo} />
                </View>
                <Text style={styles.info}>{item.info}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.yesButton]}
                    onPress={handlePresentModalPress}
                  >
                    <Text style={styles.yesText}>Yes ₹ {item.yesOdds}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button, styles.noButton]}>
                    <Text style={styles.noText}>NO ₹ {item.noOdds}</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
            <Text>Awesome 🎉</Text>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "center",
  },
  carouselContainer: {
    marginTop: 10,
    width: Dimensions.get("window").width,
    height: 180,
  },
  bannerFlatListContainer: {
    width: Dimensions.get("window").width,
    height: 150,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    padding: 10,
    margin: 10,
    width: Dimensions.get('window').width - 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  yesButton: {
    backgroundColor: '#e0f0ff',
  },
  noButton: {
    backgroundColor: '#ffe0e0',
  },
  yesText: {
    color: '#1a73e8',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noText: {
    color: '#d93025',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default HomeScreen;
