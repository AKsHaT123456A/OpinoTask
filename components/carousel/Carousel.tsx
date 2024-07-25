import {StyleSheet, Image, View, Platform} from 'react-native';
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
  const [aspectRatio, setAspectRatio] = useState(1);

  // Get Image Width and Height to Calculate AspectRatio
  useLayoutEffect(() => {
    if (item.image) {
      const {width, height} = Image.resolveAssetSource(item.image);
      setAspectRatio(width / (height-80));
    }
  }, [item.image]);

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
          style={[styles.image, {aspectRatio: aspectRatio}]}
        />
      </Animated.View>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow: 'hidden',
    backgroundColor: 'white',
    // height:'60%'
  },
  image: {
    width: '100%',
    height: undefined,
  },
});