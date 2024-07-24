import React, { useState, useEffect, useRef, RefObject } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, ScrollViewProps, NativeSyntheticEvent, NativeScrollEvent, ViewStyle } from 'react-native';

// Define props interface for CardSlider component
interface CardSliderProps extends ScrollViewProps {
  autoplay?: boolean;
  interval?: number;
  children: React.ReactNode[];
}

const window = Dimensions.get('window');

const CardSlider: React.FC<CardSliderProps> = ({ children, autoplay = true, interval = 3000, style, ...props }) => {
    
  const [position, setPosition] = useState(1);
  const [canAutoMove, setCanAutoMove] = useState(true);
  const sliderRef: RefObject<ScrollView> = useRef(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (autoplay) {
      timer = setInterval(() => {
        next();
      }, interval);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [autoplay, interval]);

  const next = () => {
    if (canAutoMove && sliderRef.current) {
      sliderRef.current.scrollTo({ x: (window.width - 30) * position });
    }
  };

  const scroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setCanAutoMove(false);
    const offsetX = e.nativeEvent.contentOffset.x;
    const page = Math.floor(offsetX / (window.width - 30));
    setPosition(page === children.length - 1 ? 0 : page + 1);
    setTimeout(() => {
      setCanAutoMove(true);
    }, 1000);
  };

  const cards = children.length > 1
    ? children.map((item, index) => (
        <View style={styles.card} key={index}>
          {item}
        </View>
      ))
    : <View style={styles.card}>{children}</View>;

  return (
    <ScrollView
      {...props}
      ref={sliderRef}
      style={[styles.scroll, style]}
      onScroll={scroll}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={20}
    >
<View style={styles.card}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    width: window.width - 30,
    marginHorizontal: 15,
    backgroundColor:'green',
    overflow: 'visible',
  } as ViewStyle,
  card: {
    width: window.width - 40,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    elevation: 2,
    padding: 10,
    marginHorizontal: 5,
  } as ViewStyle,
});

export default CardSlider;
