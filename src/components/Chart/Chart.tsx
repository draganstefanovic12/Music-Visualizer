import { TotalGenres } from "../../types";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type ChartProps = {
  genres: TotalGenres[];
};

const Chart = ({ genres }: ChartProps) => {
  const Labels = genres.map((genre: TotalGenres) => genre.name);
  const Count = genres.map((genre: TotalGenres) => genre.count);

  const options = {
    responsive: true,
    aspectRatio: 1.5,
  };

  const data = {
    labels: Labels,
    datasets: [
      {
        label: "Genres",
        data: Count,
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(75, 192, 192, 0.3)",
          "rgba(153, 102, 255, 0.3)",
          "rgba(255, 159, 64, 0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
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
