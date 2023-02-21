import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import DropDown from "./DropDown";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultCard = (prop) => {
  debugger;
  const data = {
    labels: ["BJS", "CJS"],
    datasets: [
      {
        label: "# of Votes",
        data: [prop.bjsValue, prop.cjsValue],
        backgroundColor: ["rgba(168, 85 ,247,1)", "rgba(54, 162, 235, 1)"],
        borderColor: ["rgb(168, 85 ,247,1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",

        labels: {
          color: "#fff",
          fontSize: "24",
        },
      },
    },
  };

  return (
    <div class="w-full sm:w-1/2  xl:w-1/2">
      <div class="mb-4 mx-0 mb-4  xl:mr-2">
        <div class="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
          <div className="h-80 flex justify-center items-center		">
            <Doughnut data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
