import { Doughnut } from "react-chartjs-2";
import { TotalGenres } from "../../types";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type ChartProps = {
  genres: TotalGenres[];
};

const backgroundColor = [
  "rgba(255, 99, 132, 0.5)",
  "rgba(54, 162, 235, 0.5)",
  "rgba(255, 206, 86, 0.5)",
  "rgba(75, 192, 192, 0.5)",
  "rgba(153, 102, 255, 0.5)",
  "rgba(255, 159, 64, 0.5)",
  "rgba(25, 132, 197, 0.5)",
];

const borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(25, 132, 197, 1)",
];

const Chart = ({ genres }: ChartProps) => {
  const Labels = genres.map((genre: TotalGenres) => genre.name);
  const Count = genres.map((genre: TotalGenres) => genre.count);

  const options = {
    responsive: true,
    color: "#cccccc",
    aspectRatio: 1.5,
  };

  const data = {
    labels: Labels,
    datasets: [
      {
        label: "Genres",
        data: Count,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
      },
    ],
  };

  return (
    <div className="canvas-wrapper">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Chart;
