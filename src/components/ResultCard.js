import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import DropDown from "./DropDown";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResultCard = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
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

function VoteCastComponent({}) {
  return (
    <div class="w-full sm:w-1/2 xl:w-1/2">
      <div class="mx-0 mb-4 sm:ml-4 xl:mr-4">
        <div class="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
          <p class="p-4 font-bold text-black text-xl dark:text-white">
            Vote for Better tomorrow
          </p>
          <p class="p-4  font-normal text-black text-md dark:text-white">
            Online voting systems provide a convenient, time-saving, and
            accessible alternative to traditional polling stations. The system
            should prioritize security, user-friendliness, and compatibility
            with various devices and internet connections to ensure the
            integrity of the voting process. It has the potential to
            revolutionize democratic participation, making it more inclusive and
            accessible to all.
          </p>
          <div className="m-4">
            {" "}
            <DropDown />
          </div>

          <div class="relative flex items-center p-4  sm:mr-0 sm:right-auto">
            <a
              href="#_"
              class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
            >
              <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
              <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
              </span>
              <span class="relative text-white">Cast Vote Now 👍</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
