import { Colors } from "@/constants/Colors";
import { useBalance } from "@/context/BalanceContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolateColor,
  runOnJS,
  interpolate,
  withTiming,
} from "react-native-reanimated";

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 100;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;
export const useSwipeButton = (isYes: boolean, closeBottomSheet?: () => void) => {
  const { setOrder, balance } = useBalance();
  const X = useSharedValue(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const handleComplete = async (isToggled: boolean) => {
    if (isToggled !== orderPlaced) {
      setOrderPlaced(isToggled);
      
      setOrder(orderPlaced);
      if (!orderPlaced) {
        await AsyncStorage.setItem("balance", balance.toString());
      }
      if (isToggled) {
        if(!closeBottomSheet)return ;
        setTimeout(() => {
          runOnJS(closeBottomSheet)();
        }, 1000);
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
      backgroundColor: !orderPlaced
        ? isYes
          ? interpolateColor(
              X.value,
              [0, H_SWIPE_RANGE],
              [Colors.light.buttonColorYes, "#06d6a0"]
            )
          : interpolateColor(X.value, [0, H_SWIPE_RANGE], [Colors.light.buttonColorNo, "#06d6a0"])
        : interpolateColor(X.value, [0, H_SWIPE_RANGE], ["green", "green"]),
    };
  });

  const animatedSwipeableStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: X.value }],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(interpolate(X.value, [0, H_SWIPE_RANGE], [1, 0]), {
        duration: 50,
      }),
    };
  });

  const orderTextStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(orderPlaced ? 1 : 0, {
        duration: 310,
      }),
    };
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(orderPlaced ? 0 : 1, {
        duration: 300,
      }),
      transform: [
        {
          scale: withTiming(orderPlaced ? 0.5 : 1, {
            duration: 300,
          }),
        },
      ],
    };
  });

  return {
    X,
    orderPlaced,
    handleComplete,
    animatedGestureHandler,
    animatedButtonStyle,
    animatedSwipeableStyle,
    animatedTextStyle,
    orderTextStyle,
    imageStyle,
  };
};
