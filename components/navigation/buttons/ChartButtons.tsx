import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

// Define the types for the props
interface ButtonProps {
  onPress: () => void;
  isSelected: boolean;
  label: string;
}

// Create an animated version of TouchableOpacity
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const Button: React.FC<ButtonProps> = ({ onPress, isSelected, label }) => {
  const animatedValue = useRef(new Animated.Value(isSelected ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isSelected ? 1 : 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, [isSelected]);

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#fff', '#000'], 
  });

  const textColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000', '#fff'],
  });

  return (
    <AnimatedTouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }] as ViewStyle}
    >
      <Animated.Text style={[styles.buttonText, { color: textColor }] as TextStyle}>
        {label}
      </Animated.Text>
    </AnimatedTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginHorizontal: 4,
    borderWidth: 1, // Added to show border when inactive
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Button;
