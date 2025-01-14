import React from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";
import { scaleBand, scaleLinear } from "@visx/scale";

// Define types for the data
interface HorizontalBarChartProps {
  data: { label: string; value: number }[];
}

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  data,
}) => {
  // Define margins and chart dimensions
  const margin = { top: 20, right: 30, bottom: 40, left: 40 };
  const width = 500;
  const height = 300;

  // Create scales for the bar chart
  const xScale = scaleLinear<number>({
    domain: [0, Math.max(...data.map((d) => d.value))],
    range: [margin.left, width - margin.right],
  });

  const yScale = scaleBand<string>({
    domain: data.map((d) => d.label),
    padding: 0.2,
    range: [margin.top, height - margin.bottom],
  });

  return (
    <svg width={width} height={height}>
      <Group>
        {data.map((d, i) => (
          <Bar
            key={`bar-${i}`}
            x={margin.left}
            y={yScale(d.label)}
            width={xScale(d.value) - margin.left}
            height={yScale.bandwidth()}
            fill="teal"
          />
        ))}
      </Group>
    </svg>
  );
};
