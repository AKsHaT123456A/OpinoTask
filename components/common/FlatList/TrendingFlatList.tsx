import React, { useRef } from "react";
import { FlatList, SafeAreaView, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { trendingNowData1, trendingNowData2 } from "@/constants/data";
import { styles } from "./styles";
import TrendingCard from "../Card/TrendingCard";

type Item = {
  id: number;
  image: string;
  title: string;
};

type FlatListRef = FlatList<Item> | null;

const TrendingNowFlatList = () => {
  const refFlatList1 = useRef<FlatListRef>(null);
  const refFlatList2 = useRef<FlatListRef>(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    if (refFlatList2.current) {
      refFlatList2.current.scrollToOffset({ offset: offsetX, animated: false });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={refFlatList1}
        data={trendingNowData1.items as Item[]}
        renderItem={({ item }) => <TrendingCard image={item.image} title={item.title} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        ref={refFlatList2}
        data={trendingNowData2.items as Item[]}
        renderItem={({ item }) => <TrendingCard image={item.image} title={item.title} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default TrendingNowFlatList;
