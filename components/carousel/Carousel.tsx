import {StyleSheet, Image, View, Dimensions} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Animated, {useAnimatedStyle, interpolate} from 'react-native-reanimated';

interface CustomImageProps {
  item: any;
  x: any;
  index: number;
  size: number;
  spacer: number;
}

const CustomImage = ({item, x, index, size, spacer}: CustomImageProps) => {
  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [(index - 2) * size, (index - 1) * size, index * size],
      [0.8, 1, 0.8],
    );
    return {
      transform: [{scale}],
    };
  });

  if (!item.image) {
    return <View style={{width: spacer}} key={index} />;
  }
  return (
    <View style={{width: size}} key={index}>
      <Animated.View style={[styles.imageContainer, style]}>
        <Image
          source={item.image}
          style={[styles.image]}
        />
      </Animated.View>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    left: -20,
    width: Dimensions.get('window').width * 0.8+30,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
