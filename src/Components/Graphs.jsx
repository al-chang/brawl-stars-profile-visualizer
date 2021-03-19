import React, { useEffect, useState } from "react";
import { Bar, Line, Pie, Polar } from "react-chartjs-2";
import _ from "lodash";

const colors = [
  "rgb(28, 164, 255, 0.5)", //red
  "rgb(255, 28, 70, 0.5)", //blue
  "rgb(56, 255, 89, 0.5)", //green
  "rgb(248, 255, 56, 0.5)", //yellow
  "rgb(255, 92, 250, 0.5)", //Pink
  "rgb(255, 156, 56, 0.5)", // Orange
  "rgb(175, 46, 255, 0.5)", // Purple
  "rgb(46, 255, 238, 0.5)", // Cyan
  "rgb(28, 164, 255, 0.5)", 
  "rgb(255, 28, 70, 0.5)", 
  "rgb(56, 255, 89, 0.5)", 
  "rgb(248, 255, 56, 0.5)", 
  "rgb(255, 92, 250, 0.5)", 
  "rgb(255, 156, 56, 0.5)", 
  "rgb(175, 46, 255, 0.5)", 
  "rgb(46, 255, 238, 0.5)", 
  "rgb(28, 164, 255, 0.5)", 
  "rgb(255, 28, 70, 0.5)", 
  "rgb(56, 255, 89, 0.5)", 
  "rgb(248, 255, 56, 0.5)", 
  "rgb(255, 92, 250, 0.5)", 
  "rgb(255, 156, 56, 0.5)", 
  "rgb(175, 46, 255, 0.5)", 
  "rgb(46, 255, 238, 0.5)", 
  "rgb(28, 164, 255, 0.5)", 
  "rgb(255, 28, 70, 0.5)", 
  "rgb(56, 255, 89, 0.5)", 
  "rgb(248, 255, 56, 0.5)", 
  "rgb(255, 92, 250, 0.5)", 
  "rgb(255, 156, 56, 0.5)", 
  "rgb(175, 46, 255, 0.5)", 
  "rgb(46, 255, 238, 0.5)", 
];

// Visualize the recent wins and loses in a pie chart
const WinLose = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      responsive: true,
      labels: ["Wins", "Losses"],
      datasets: [
        {
          label: "Win/Lose",
          data: props.winLose,
          backgroundColor: colors,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div style={{ backgroundColor: "white", borderRadius: "25px" }}>
      <Pie data={chartData} />
    </div>
  );
};

// Visualize the recently played gamemodes in a Polar graph
const GameModes = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    // Add the labels to labels array and numbers to numbers array
    let labels = [];
    let numberMode = [];
    for (let property in props.gameModes) {
      if (!props.gameModes.hasOwnProperty(property)) {
        continue;
      }
      // Use lodash to change from camel case to regular text
      labels.push(_.startCase(property));
      numberMode.push(props.gameModes[property]);
    }
    setChartData({
      responsive: true,
      labels: labels,
      datasets: [
        {
          label: "Recent Game Modes",
          data: numberMode,
          backgroundColor: colors,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div style={{ backgroundColor: "white", borderRadius: "25px" }}>
      <Polar data={chartData} />
    </div>
  );
};

// Polar graph of recently played brawlers
const RecentBrawlers = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    // Add the labels to labels array and numbers to numbers array
    let labels = [];
    let numberBrawler = [];
    for (let property in props.recentBrawlers) {
      if (!props.recentBrawlers.hasOwnProperty(property)) {
        continue;
      }
      // Use lodash to change from camel case to regular text
      labels.push(_.startCase(property));
      numberBrawler.push(props.recentBrawlers[property]);
    }
    setChartData({
      responsive: true,
      labels: labels,
      datasets: [
        {
          label: "Recent Brawlers",
          data: numberBrawler,
          backgroundColor: colors,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div style={{ backgroundColor: "white", borderRadius: "25px" }}>
      <Polar data={chartData} />
    </div>
  );
};

//Visualize trophies by brawler
const BrawlerTrophies = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let half = Math.ceil(props.brawlerData.length / 2);
    let labels = props.brawlerData.splice(0, half);
    let datas = props.brawlerData.splice(-half);
    setChartData({
      responsive: true,
      labels: labels,
      datasets: [
        {
          label: "Trophies By Brawler",
          data: datas,
          backgroundColor: colors,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div style={{ backgroundColor: "white", borderRadius: "25px" }}>
      <Bar data={chartData} />
    </div>
  );
};

// Graph of the player trophies over time 
const TrophiesOverTime = (props) => {
  const [chartData, setChartData] = useState({});

  let words = [];

  for (let i = 0; i < props.trophiesOverTime.length; i++) {
    words.push("");
  }

  const chart = () => {
    setChartData({
      responsive: true,
      labels: words,
      datasets: [
        {
          label: "Trophies Over Past " + props.trophiesOverTime.length + " Games",
          data: props.trophiesOverTime,
          backgroundColor: 'rgba(75,192,192,0.4)',
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div style={{ backgroundColor: "white", borderRadius: "25px" }}>
      <Line data={chartData} />
    </div>
  );
}

export { WinLose, GameModes, RecentBrawlers, BrawlerTrophies, TrophiesOverTime };
