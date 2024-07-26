import React from "react";
import { View, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { styles } from "./styles";
import { useSwipeButton } from "@/hooks/useSwipeButton";

const SwipeButton: React.FC<{ isYes: boolean; onToggle: (value: boolean) => void; closeBottomSheet: () => void }> = ({
  isYes,
  onToggle,
  closeBottomSheet,
}) => {
  const {
    X,
    orderPlaced,
    handleComplete,
    animatedGestureHandler,
    animatedButtonStyle,
    animatedSwipeableStyle,
    animatedTextStyle,
    orderTextStyle,
    imageStyle,
  } = useSwipeButton(isYes, closeBottomSheet);

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
            source={require("../../../assets/images/arrow.png")}
            style={[styles.image, imageStyle]}
          />
        </Animated.View>
      </PanGestureHandler>
      <Animated.View style={[styles.buttonContainer, animatedButtonStyle]}>
        <Animated.Text style={[styles.orderText, orderTextStyle]}>
          Order Placed
        </Animated.Text>
        <Animated.Text style={[styles.swipeText, animatedTextStyle]}>
          Swipe for {isYes ? "Yes" : "No"}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default SwipeButton;
