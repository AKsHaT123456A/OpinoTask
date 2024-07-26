import React from "react";
import { FlatList, View } from "react-native";
import { CardData } from "@/constants/data";
import { styles } from "./styles";
import BannerCard from "../Card/BannerCard";

type Item = {
  id: number;
  image: string;
  title: string;
};

const BannerFlatList = () => (
  <View style={styles.container}>
    <FlatList
      data={CardData.items as Item[]}
      renderItem={({ item }) => <BannerCard image={item.image} title={item.title} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default BannerFlatList;
