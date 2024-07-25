import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { DottedLine } from "./DottedLine";

const PriceIncreaseDecrea = () => {
  const sliderWidth = 235;
  const min = 0;
  const max = 10;
  const step = 0.1;
  const [price, setPrice] = useState(5.3);
  const position = useSharedValue(0);
  const position2 = useSharedValue(sliderWidth);
  const opacity2 = useSharedValue(0);
  const zIndex2 = useSharedValue(0);
  const context2 = useSharedValue(0);

  const onValueChange = (value) => {
    setPrice(value);
    const newPosition = ((value - min) / (max - min)) * sliderWidth;
    position2.value = newPosition;
  };

  useEffect(() => {
    const initialPosition = ((price - min) / (max - min)) * sliderWidth;
    position.value = 0;
    position2.value = initialPosition;
  }, [price]);

  const pan2 = Gesture.Pan()
    .onBegin(() => {
      context2.value = position2.value;
    })
    .onUpdate((e) => {
      opacity2.value = 1;
      if (context2.value + e.translationX > sliderWidth) {
        position2.value = sliderWidth;
      } else if (context2.value + e.translationX < position.value) {
        position2.value = position.value;
        zIndex2.value = 1;
      } else {
        position2.value = context2.value + e.translationX;
        runOnJS(setPrice)(
          min +
            Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
              step
        );
      }
    })
    .onEnd(() => {
      opacity2.value = 0;
      runOnJS(onValueChange)(
        min +
          Math.floor(position2.value / (sliderWidth / ((max - min) / step))) *
            step
      );
    });

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateX: position2.value }],
    zIndex: zIndex2.value,
  }));

  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
    width: position2.value - position.value,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Price</Text>
        <View>
          <Text style={styles.headerPrice}>₹ {price.toFixed(1)}</Text>
          <Text style={styles.headerQty}>132045 qty available</Text>
        </View>
      </View>

      <View style={styles.sliderContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPrice((prev) => Math.max(min, prev - step))}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={{ width: sliderWidth }}>
          <View style={[styles.sliderBack, { width: sliderWidth }]} />
          <Animated.View style={[sliderStyle, styles.sliderFront]} />
          <GestureDetector gesture={pan2}>
            <Animated.View
              style={[animatedStyle2, styles.thumb]}
            ></Animated.View>
          </GestureDetector>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setPrice((prev) => Math.min(max, prev + step))}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <DottedLine />

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Text style={styles.footerPrice}>₹ {price.toFixed(1)}</Text>
          <Text style={styles.footerText}>You put</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={[styles.footerPrice, styles.footerGreen]}>₹ 10</Text>
          <Text style={styles.footerText}>You get</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headerPrice: {
    textAlign: "right",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerQty: {
    fontSize: 12,
    color: "#666666",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  sliderBack: {
    height: 8,
    borderRadius: 20,
  },
  sliderFront: {
    height: 8,
    backgroundColor: "#3F4CF6",
    borderRadius: 20,
    position: "absolute",
  },
  thumb: {
    width: 20,
    height: 20,
    position: "absolute",
    backgroundColor: "white",
    borderColor: "#3F4CF6",
    borderWidth: 5,
    borderRadius: 10,
  },
  label: {
    position: "absolute",
    top: -40,
    bottom: 20,
    backgroundColor: "black",
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    color: "white",
    padding: 5,
    fontWeight: "bold",
    fontSize: 16,
    width: "100%",
  },
  slider: {
    flex: 1,
    width: 200,
    height: 20,
    marginHorizontal: 10,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#d3d3d3",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#000000",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  footerItem: {
    alignItems: "center",
  },
  footerPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 12,
    color: "#666666",
  },
  footerGreen: {
    color: "#00cc00",
  },
});

export default PriceIncreaseDecrea;
