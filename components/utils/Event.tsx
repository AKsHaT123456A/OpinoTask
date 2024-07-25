import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Dotted from './Dotted'

const EventDetails = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>About the event</Text>
      
      <View style={styles.infoRow}>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Traders</Text>
          <Text style={styles.infoValue}>₹ 47.12K</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Volume</Text>
          <Text style={styles.infoValue}>₹ 9.9L</Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Started at</Text>
          <Text style={styles.infoValue}>Jun 19, 2024 3:40 PM</Text>
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.infoLabel}>Ending at</Text>
          <Text style={styles.infoValue}>Jun 19, 2024 9:00 PM</Text>
        </View>
      </View>
<Dotted/>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Overview</Text>
        <Text style={styles.sectionContent}>Information about event</Text>
      </View>

<Dotted/>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Source of Truth</Text>
        <Text style={styles.sectionContent}>Information about source of truth</Text>
      </View>
<Dotted/>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Rules</Text>
        <Text style={styles.sectionContent}>Terms and conditions</Text>
      </View>
<Dotted/>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText1}>Keep</Text>
        <Text style={styles.footerText}>Trading!</Text>
        <View style={styles.footerDecoration}>
          {Array.from({ length: 50 }, (_, index) => (
            <View
              key={index}
              style={[
                styles.bar,
                { height: Math.random() * 40 + 10 } // Random height between 10 and 50
              ]}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoColumn: {
    flex: 1,
    paddingHorizontal: 8,
  },
  infoLabel: {
    fontSize: 16,
    color: '#888',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
  },
  footerContainer: {
    marginTop: 8,
    // alignItems: 'center',
  },
  footerText1: {
    fontSize: 42,
    color:"#D3D3D3",
    fontWeight: 'bold',
    textShadowColor: '#aaa',
    marginTop:-10,
    textShadowOffset: { width: 2, height: 2 },
    marginBottom:-20,
    zIndex:1,
    textShadowRadius: 2,
    letterSpacing: 1,
  },
  footerText: {
    fontSize: 42,
    color:"#D3D3D3",
    fontWeight: 'bold',
    textShadowColor: '#aaa',
    marginTop:10,
    textShadowOffset: { width: 2, height: 2 },
    marginBottom:-30,
    zIndex:1,
    textShadowRadius: 2,
    letterSpacing: 1,
  },
  footerDecoration: {
    flexDirection: 'row',
    marginTop: 16,
    // justifyContent: 'center',
    height: 50, // Fixed height for the container
    alignItems: 'flex-end', // Align bars to the bottom
  },
  bar: {
    width: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 2,
  },
});

export default EventDetails;
