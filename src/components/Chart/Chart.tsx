import { TotalGenres } from "../../types";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type ChartProps = {
  genres: TotalGenres[];
};

const Chart = ({ genres }: ChartProps) => {
  const Labels = genres.map((genre: TotalGenres) => genre.name);
  const Count = genres.map((genre: TotalGenres) => genre.count);

  const data = {
    labels: Labels,
    datasets: [
      {
        label: "Genres",
        data: Count,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        radius: 500,
      },
    ],
  };

  return (
    <div className="canvas-wrapper">
      <Pie data={data} />
    </div>
  );
};

export default Chart;
