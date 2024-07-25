import React, { useRef, useState } from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from "react-native";
import Card from "../carousel/Cards";
import {
  BettingCardData,
  CardData,
  trendingNowData1,
  trendingNowData2,
} from "@/constants/data";
import TrendingCard from "./TrendingCard";
// import BettingCard from "./BettingCard";
import { TouchableOpacity } from "react-native-gesture-handler";
import BettingCard from "./BettingCard";

type Item = {
  id: number;
  image: string;
  title: string;
};

type FlatListRef = FlatList<Item> | null;

export const BannerFlatList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={CardData.items as Item[]} 
          renderItem={({ item }) => (
            <Card image={item.image} title={item.title} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export const TrendingNowFlatList = () => {
  const refFlatList1 = useRef<FlatListRef>(null);
  const refFlatList2 = useRef<FlatListRef>(null);
  const [scrollingRightSideAmount, setScrollingRightSideAmount] = useState(0);

  function handleScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const offsetX = e.nativeEvent.contentOffset.x;
    if (refFlatList2.current) {
      refFlatList2.current.scrollToOffset({ offset: offsetX, animated: false });
    }
    setScrollingRightSideAmount(offsetX);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.flatListContainer}>
        <FlatList
          ref={refFlatList1}
          data={trendingNowData1.items as Item[]}
          renderItem={({ item }) => (
            <TrendingCard image={item.image} title={item.title} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          ref={refFlatList2}
          data={trendingNowData2.items as Item[]}
          renderItem={({ item }) => (
            <TrendingCard image={item.image} title={item.title} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export const BettingFlatList = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={BettingCardData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <BettingCard
              question={item.question}
              info={item.info}
              yesOdds={item.yesOdds}
              noOdds={item.noOdds}
              logo={item.logo}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    width: Dimensions.get("window").width,
  },
  flatListContainerTrending: {
    width: Dimensions.get("window").width,
  },
  flatListContent: {
    alignItems: "center",
    paddingVertical: 10,
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
    // marginBottom:4
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
    paddingVertical: 10,
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
    fontWeight: 'bold',
  },
});
