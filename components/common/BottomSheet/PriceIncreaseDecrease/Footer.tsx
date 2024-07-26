import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({ price }: { price: number }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerItem}>
        <Text style={styles.footerPrice}>₹ {price.toFixed(1)}</Text>
        <Text style={styles.footerText}>You put</Text>
      </View>
      <View style={styles.footerItem}>
        <Text style={[styles.footerPrice, styles.footerGreen]}>₹ 10</Text>
        <Text style={styles.footerText}>You get</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#666666',
  },
  footerGreen: {
    color: '#00cc00',
  },
});

export default Footer;
