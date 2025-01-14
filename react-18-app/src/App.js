import React from "react";
import { BarChart, HorizontalBarChart } from "tipu-visx-lib";

function App() {
  const data = [
    { label: "A", value: 10 },
    { label: "B", value: 30 },
    { label: "C", value: 50 },
    { label: "D", value: 20 },
  ];
  return (
    <div>
      <h1>BarChart</h1>
      <BarChart data={data} />
      <h1>HorizontalBarChart</h1>
      <HorizontalBarChart data={data} />
    </div>
  );
}

export default App;
