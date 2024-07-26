import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PriceDisplay = ({ price }: { price: number }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Price</Text>
      <View>
        <Text style={styles.headerPrice}>₹ {price.toFixed(1)}</Text>
        <Text style={styles.headerQty}>132045 qty available</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerPrice: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerQty: {
    fontSize: 12,
    color: '#666666',
  },
});

export default PriceDisplay;
