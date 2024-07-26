import React from 'react';
import { View, Dimensions, StyleSheet, Animated } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

interface ChartProps {
  data: { value: number; label: string }[];
  data2: { value: number; label: string }[];
  opacity: Animated.Value;
  color1?: string;
  color2?: string;
}

const Chart: React.FC<ChartProps> = ({ data, data2, opacity, color1 = "blue", color2 = "green" }) => {
  return (
    <Animated.View style={{ ...styles.chart, opacity }}>
      <LineChart
        data={data}
        data2={data2}
        width={Dimensions.get('window').width - 90}
        height={220}
        dataPointLabelWidth={2}
        color2={color2}
        isAnimated
        animationDuration={500}
        dataPointsColor={color1}
        startFillColor={`rgba(${color1}, 0.3)`}
        startOpacity={0.3}
        endOpacity={0.1}
        color={color1}
        spacing={85}
        curved
        textColor={color1}
        hideDataPoints1
        hideDataPoints2
        xAxisColor="#000"
        yAxisColor="#000"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  chart: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default Chart;
