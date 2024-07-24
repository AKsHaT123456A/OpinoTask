import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from "react-native";
import CustomCarousel from "@/components/carousel/CustomCarousel";
import Navbar from "@/components/Navbar";
import { CarouselDataType } from "@/types/CarousalDataType";
import {BannerFlatList, TrendingNowFlatList} from "@/components/common/FlatLists";

// Banner data for CustomCarousel
const BannerData: CarouselDataType = {
  items: [
    {
      id: 1,
      image: require("../../assets/images/carousal.jpg"),
      altText: "First Image",
    },
    {
      id: 2,
      image: require("../../assets/images/carousal.jpg"),
      altText: "Second Image",
    },
    {
      id: 3,
      image: require("../../assets/images/carousal.jpg"),
      altText: "Third Image",
    },
  ],
  type: "banner",
};

const HomeScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Navbar />
        {/* CustomCarousel container */}
        <View style={styles.carouselContainer}>
          <CustomCarousel data={BannerData} pagination={false} autoPlay={true} />
        </View>
       
        {/* FlatList container */}
        <View style={styles.bannerFlatListContainer}>
          <BannerFlatList />
        </View>

        {/* TRENDING NOW heading */}
        <Text style={styles.heading}>TRENDING NOW</Text>
        <TrendingNowFlatList/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  carouselContainer: {
    width: Dimensions.get("window").width,
    height: 180,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  bannerFlatListContainer: {
    width: Dimensions.get("window").width,
    height: 150,
  },
});

export default HomeScreen;
