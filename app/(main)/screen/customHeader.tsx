import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import left from "@/assets/left.png";
import share from "@/assets/share.png";
import { COLORS } from "@/constants";

const CustomHeader = ({ onBackPress, onSharePress, title }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity style={styles.btnContainer} onPress={onBackPress}>
      <Image source={left} resizeMode="cover" style={styles.icon} />
      <Text style={styles.btn}>{title}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnContainer} onPress={onSharePress}>
      <Image source={share} resizeMode="cover" style={styles.icon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    height: 60, 
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 10,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    fontSize: 17,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default CustomHeader;
