import React, { useState } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import Chart from './Chart';
import { dataSets, dataSets2 } from '@/constants/ChartData';
import useChartAnimation from '@/hooks/useChartAnimation';
import Button from '@/components/navigation/buttons/ChartButtons';

const MyLineChart: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string>("1h");
  const { opacity1h, opacity3h, opacity12h, opacityAllTime } = useChartAnimation(selectedTime);

  return (
    <View>
      <Text style={styles.title}>THE MARKET TRENDS/CHART</Text>
      <View style={{ flexDirection: 'column', alignSelf: 'flex-end', marginTop: 8, marginBottom: -35, zIndex: 1, marginRight: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
          <View style={{ width: 10, height: 10, backgroundColor: 'blue', marginRight: 4, borderRadius: 2 }} />
          <Text>Yes</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 10, height: 10, backgroundColor: 'green', marginRight: 4, borderRadius: 2 }} />
          <Text>No</Text>
        </View>
      </View>
      <View style={styles.chartContainer}>
        <Chart
          data={dataSets["1h"]}
          data2={dataSets2["1h"]}
          opacity={opacity1h}
        />
        <Chart
          data={dataSets["3h"]}
          data2={dataSets2["3h"]}
          opacity={opacity3h}
        />
        <Chart
          data={dataSets["12h"]}
          data2={dataSets2["12h"]}
          opacity={opacity12h}
        />
        <Chart
          data={dataSets["all time"]}
          data2={dataSets2["all time"]}
          opacity={opacityAllTime}
        />
      </View>
      <View style={styles.buttonContainer}>
        {["1h", "3h", "12h", "all time"].map((time) => (
          <Button
            key={time}
            onPress={() => setSelectedTime(time)}
            isSelected={selectedTime === time}
            label={time}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 10,
    fontSize: 13,
    margin: 16,
    fontWeight: '500',
  },
  chartContainer: {
    position: 'relative',
    width: Dimensions.get('window').width - 20,
    height: 250,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
});

export default MyLineChart;
