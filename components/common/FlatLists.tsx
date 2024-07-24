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
} from "react-native";
import Card from "../carousel/Cards";
import { CardData } from "@/constants/data";

// Define a type for the data items
type Item = {
  id: number;
  image: string;
  title: string;
};

// Define a type for the FlatList refs
type FlatListRef = FlatList<Item> | null;

export const BannerFlatList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={CardData.items as Item[]} // Cast CardData.items to Item[]
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
      <View style={{ flex: 1 }}>
        <FlatList
          ref={refFlatList1}
          data={CardData.items as Item[]} 
          renderItem={({ item }) => (
            <Card image={item.image} title={item.title} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          onScroll={handleScroll}
          scrollEventThrottle={16}
        />
        <FlatList
          ref={refFlatList2}
          data={CardData.items as Item[]} 
          renderItem={({ item }) => (
            <Card image={item.image} title={item.title} />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  flatListContainer: {
    width: Dimensions.get("window").width,
  },
});
