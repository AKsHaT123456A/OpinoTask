import React from 'react';
import { View, StyleSheet } from 'react-native';

const DottedLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dottedLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dottedLine: {
    width: '100%', // Adjust the width as needed
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderColor: 'black',
  },
});

export default DottedLine;
