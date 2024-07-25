import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
  runOnJS,
  interpolate,
} from "react-native-reanimated";

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 100;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

const SwipeButton = ({ isYes, onToggle, closeBottomSheet }) => {
  const X = useSharedValue(0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleComplete = (isToggled) => {
    if (isToggled !== orderPlaced) {
      setOrderPlaced(isToggled);
      onToggle(isToggled);
      if (isToggled) {
        setTimeout(() => {
          closeBottomSheet(); // Close bottom sheet after delay
        }, 1000); // Delay in milliseconds (1 second in this case)
      }
    }
  };

  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = orderPlaced;
    },
    onActive: (e, ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = H_SWIPE_RANGE + e.translationX;
      } else {
        newValue = e.translationX;
      }

      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        runOnJS(handleComplete)(true);
      }
    },
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: isYes
        ? interpolateColor(X.value, [0, H_SWIPE_RANGE], ["lightblue", "#06d6a0"])
        : interpolateColor(X.value, [0, H_SWIPE_RANGE], ["lightcoral", "#ff6b6b"]),
    };
  });

  const animatedSwipeableStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: X.value }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(X.value, [0, H_SWIPE_RANGE], [1, 0]),
    };
  });

  const orderTextStyle = useAnimatedStyle(() => {
    return {
      opacity: orderPlaced ? 1 : 0,
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      opacity: orderPlaced ? 0 : 1,
      transform: [{ scale: orderPlaced ? 0.5 : 1 }],
    };
  });

  return (
    <View style={styles.swipeCont}>
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View
          style={[
            styles.swipeable,
            animatedSwipeableStyle,
            { opacity: orderPlaced ? 0 : 1 },
          ]}
        >
          <Animated.Image
            source={require("../../assets/images/arrow.png")}
            style={[styles.image, imageStyle]}
          />
        </Animated.View>
      </PanGestureHandler>
      <Animated.View style={[styles.buttonContainer, animatedButtonStyle]}>
        <Animated.Text style={[styles.orderText, orderTextStyle]}>
          Order Placed
        </Animated.Text>
        <Animated.Text style={[styles.swipeText, animatedTextStyle]}>
          Swipe Me
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  swipeable: {
    position: "absolute",
    backgroundColor: "white",
    left: BUTTON_PADDING,
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS / 2,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
  swipeText: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    color: "#1b9aaa",
    textAlign: "center",
    zIndex: 2,
  },
  buttonContainer: {
    position: "absolute",
    left: BUTTON_PADDING,
    height: SWIPEABLE_DIMENSIONS,
    width: BUTTON_WIDTH - 2 * BUTTON_PADDING,
    borderRadius: BUTTON_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  orderText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    zIndex: 2,
  },
});

export default SwipeButton;
