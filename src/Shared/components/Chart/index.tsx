import { getDayOfWeek } from "@/Shared/helpers";
import { ChartMonth } from "@/Shared/interfaces/ProgressionInterface";
import { Chart, LineElement } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
Chart.register(LineElement);

interface DataSets {
  label: string;
  data: string[];
  tension: number;
  borderColor: string;
  pointBorderColor: string;
  backgroundColor: CanvasGradient;
  fill: boolean;
  spanGaps: boolean;
}

interface ChartData {
  labels: string[];
  datasets: DataSets[];
}

const chart = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
      tension: 0.5,
      borderColor: "",
      pointBorderColor: "",
      backgroundColor: {} as CanvasGradient,
      fill: true,
      spanGaps: true,
    },
  ],
};
interface LineChartProps {
  dataChart: ChartMonth[];
}

const LineChartComponent = ({ dataChart }: LineChartProps) => {
  const [chartData, setChartData] = useState<ChartData>(chart);
  useEffect(() => {
    setChartData({
      labels: dataChart.map((item) => {
        if (item.weekNumber) {
          return item.weekNumber.toString();
        } else if (item.date) {
          return getDayOfWeek(item.date);
        }
        return "";
      }),
      datasets: [
        {
          label: "",
          data: dataChart.map((item) => {
            if (item.progressionCount) {
              return item.progressionCount.toString();
            }
            return "";
          }),
          tension: 0.5,
          borderColor: "#5185F7",
          pointBorderColor: "transparent",
          backgroundColor: createLinearGradient(),
          fill: true,
          spanGaps: true,
        },
      ],
    });
  }, [dataChart]);

  const createLinearGradient = () => {
    const ctx = document.createElement("canvas").getContext("2d");
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 350);
      gradient.addColorStop(0, "#CEDDFF");
      gradient.addColorStop(1, "#CEDDFF00");
      return gradient;
    }
    return {} as CanvasGradient;
  };

  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Line
      width={400}
      data={chartData}
      height={150}
      style={{ maxHeight: "269px", maxWidth: "717px" }}
      options={options}
    />
  );
};

export default LineChartComponent;
