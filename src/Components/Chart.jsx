import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";

function Chart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "level",
          data: [32, 45, 12, 56, 69],
          backgroundColor: ["rgb(75, 192, 192, 0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
      chart()
  }, [])

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}

export default Chart;
