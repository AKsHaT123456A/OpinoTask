import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { GestureDetector } from 'react-native-gesture-handler';
import useSlider from '@/hooks/useSlider';

const Slider = ({
  price,
  onValueChange,
  
}: {
  price: number;
  onValueChange: (value: number) => void;
}) => {
  const sliderWidth = 235;
  const min = 0;
  const max = 10;
  const step = 0.1;

  // Use the custom hook
  const { animatedStyle2, sliderStyle, pan2 } = useSlider(
    price,
    sliderWidth,
    min,
    max,
    step,
    onValueChange

  );

  return (
    <View style={{ width: "75%" ,maxWidth:"75%"}}>
      <View style={[styles.sliderBack, { width: sliderWidth }]} />
      <Animated.View style={[sliderStyle, styles.sliderFront]} />
      <GestureDetector gesture={pan2}>
        <Animated.View style={[animatedStyle2, styles.thumb]} />
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderBack: {
    height: 8,
    borderRadius: 20,
    backgroundColor: '#d3d3d3',
  },
  sliderFront: {
    height: 8,
    backgroundColor: 'black',
    borderRadius: 20,
    position: 'absolute',
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    position: 'absolute',
    top: -6,
    left: -4,
    transform: [{ translateX: -10 }, { translateY: -6 }], 
  },
});

export default Slider;
