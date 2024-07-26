import { useEffect } from 'react';
import { useSharedValue, useAnimatedStyle, runOnJS } from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

const useSlider = (
  price: number,
  sliderWidth: number,
  min: number,
  max: number,
  step: number,
  onValueChange: (value: number) => void
) => {
  const position = useSharedValue(0);
  const position2 = useSharedValue(sliderWidth);
  const opacity2 = useSharedValue(0);
  const zIndex2 = useSharedValue(0);
  const context2 = useSharedValue(0);

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
        runOnJS(onValueChange)(
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

  return {
    animatedStyle2,
    sliderStyle,
    pan2,
  };
};

export default useSlider;
