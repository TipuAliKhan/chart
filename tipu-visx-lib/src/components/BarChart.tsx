import React from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleBand, scaleLinear } from "@visx/scale";

// Define types for the data
interface BarChartProps {
  data: { label: string; value: number }[];
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
  // Define margins and chart dimensions
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const width = 500;
  const height = 300;

  // Create scales for the bar chart
  const xScale = scaleBand<string>({
    domain: ['A', 'B', 'C', 'D'],
    range: [margin.left, width - margin.right],
    padding: 0.1,
  });

  const yScale = scaleLinear<number>({
    domain: [0, Math.max(...data.map((d) => d.value))],
    range: [height - margin.bottom, margin.top],
  });

  return (
    <svg width={width} height={height}>
      <Group>
        {data.map((d, i) => (
          <Bar
            key={`bar-${i}`}
            x={xScale(d.label)}
            y={yScale(d.value)}
            width={xScale.bandwidth()}
            height={height - margin.bottom - yScale(d.value)}
            fill="teal"
          />
        ))}
      </Group>
    </svg>
  );
};
