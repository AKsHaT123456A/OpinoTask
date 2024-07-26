// useChartAnimation.ts
import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const useChartAnimation = (selectedTime: string) => {
  const opacity1h = useRef(new Animated.Value(selectedTime === "1h" ? 1 : 0)).current;
  const opacity3h = useRef(new Animated.Value(selectedTime === "3h" ? 1 : 0)).current;
  const opacity12h = useRef(new Animated.Value(selectedTime === "12h" ? 1 : 0)).current;
  const opacityAllTime = useRef(new Animated.Value(selectedTime === "all time" ? 1 : 0)).current;

  useEffect(() => {
    const fadeInDuration = 300;
    const fadeOutDuration = 300;

    const animations = [
      Animated.timing(opacity1h, {
        toValue: selectedTime === "1h" ? 1 : 0,
        duration: selectedTime === "1h" ? fadeInDuration : fadeOutDuration,
        useNativeDriver: true,
      }),
      Animated.timing(opacity3h, {
        toValue: selectedTime === "3h" ? 1 : 0,
        duration: selectedTime === "3h" ? fadeInDuration : fadeOutDuration,
        useNativeDriver: true,
      }),
      Animated.timing(opacity12h, {
        toValue: selectedTime === "12h" ? 1 : 0,
        duration: selectedTime === "12h" ? fadeInDuration : fadeOutDuration,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAllTime, {
        toValue: selectedTime === "all time" ? 1 : 0,
        duration: selectedTime === "all time" ? fadeInDuration : fadeOutDuration,
        useNativeDriver: true,
      }),
    ];

    Animated.parallel(animations).start();
  }, [selectedTime]);

  return { opacity1h, opacity3h, opacity12h, opacityAllTime };
};

export default useChartAnimation;
