import { View, useWindowDimensions } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from "react-native-reanimated";
import CustomImage from "./Carousel";
import { CarouselDataType } from "@/types/CarousalDataType";
const CustomCarousal = ({
  data,
  autoPlay,
}: {
  data: CarouselDataType;
  autoPlay: boolean;

}) => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const interval = useRef<undefined | NodeJS.Timeout>();
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [newData, setNewData] = useState([
    { key: "spacer-left" },
    ...data.items,
    { key: "spacer-right" },
  ]);
  const { width } = useWindowDimensions();
  const SIZE = width * 0.8;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);

  // Update newData if data change
  useEffect(() => {
    setNewData([{ key: "spacer-left" }, ...data.items, { key: "spacer-right" }]);
  }, [data]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
    onMomentumEnd: (e) => {
      offSet.value = e.contentOffset.x;
    },
  });

  useEffect(() => {
    if (isAutoPlay === true) {
      let _offSet = offSet.value;
      interval.current = setInterval(() => {
        if (_offSet >= Math.floor(SIZE * (data.items.length - 1) - 10)) {
          _offSet = 0;
        } else {
          _offSet = Math.floor(_offSet + SIZE);
        }
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ x: _offSet, y: 0 });
        }
      }, 2000);
    } else {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [SIZE, SPACER, isAutoPlay, data.items.length, offSet.value, scrollViewRef]);

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onScrollBeginDrag={(e) => {
          setIsAutoPlay(false);
        }}
        onMomentumScrollEnd={() => {
          setIsAutoPlay(autoPlay);
        }}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {newData.map((item, index) => {
          return (
            
            <CustomImage
              key={index}
              index={index}
              item={item}
              x={x}
              size={SIZE+10}
              spacer={SPACER}
            />
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default CustomCarousal;
