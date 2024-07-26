import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BannerCard = ({ image, title }) => {
  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={styles.image}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    padding: 5,
    marginHorizontal: 5, 
  },
  image: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default BannerCard;
