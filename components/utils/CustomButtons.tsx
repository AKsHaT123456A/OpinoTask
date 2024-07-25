import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.yesButton]}>
        <Text style={styles.buttonText}>Yes ₹ 5.3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.noButton]}>
        <Text style={styles.buttonText}>No ₹ 4.7</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap:5,
    justifyContent: 'space-evenly',
    width:'100%'
    // padding: 16,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width:'50%',
    alignItems:'center',
    borderRadius: 5,
  },
  yesButton: {
    backgroundColor: '#1a73e8',
    borderColor:'lightblue',
    borderWidth:3
  },
  noButton: {
    backgroundColor: '#34a853',
    borderColor:'lightgreen',
    borderWidth:3
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButtons;
