import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
const TrendingCard = ({ image, title }:{image:any,title:string}) => {
    return (
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      height:45,
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 8,
      elevation: 2,
      paddingHorizontal: 10,
      marginHorizontal: 8,
        marginVertical: 4,
    },
    image: {
      width: 40,
      height: 35,
      resizeMode:'contain',
      borderRadius: 25,
      marginRight: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default TrendingCard;
  