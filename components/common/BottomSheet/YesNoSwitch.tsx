import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

const YesNoSwitch = ({
  isYes,
  onToggle,
}: {
  isYes: boolean;
  onToggle: (value: boolean) => void;
}) => {
  const sliderPosition = useSharedValue(isYes ? 0 : 1);

  sliderPosition.value = withTiming(isYes ? 0 : 1, { duration: 400 });

  const animatedSliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: sliderPosition.value * 200 }],
    width: "45%",
    backgroundColor: isYes ? Colors.light.buttonColorYes: Colors.light.buttonColorNo,
    borderRadius: 20,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Animated.View style={[styles.slider, animatedSliderStyle]} />

        <TouchableOpacity onPress={() => onToggle(true)} style={styles.button}>
          <Text
            style={[
              styles.text,
              isYes ? styles.activeText : styles.inactiveText,
            ]}
          >
            Yes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onToggle(false)} style={styles.button}>
          <Text
            style={[
              styles.text,
              !isYes ? styles.activeText : styles.inactiveText,
            ]}
          >
            No
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default YesNoSwitch;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    borderRadius: 20,
  },
  switchContainer: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 0.3,
    borderColor: "#000",
    position: "relative",
  },
  button: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activeText: {
    color: "#fff",
  },
  inactiveText: {
    color: "#000",
  },
  slider: {
    position: "absolute",
    height: "100%",
    top: 0,
  },
});
