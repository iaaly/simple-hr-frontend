import { useCallback, useEffect, useState } from "react";
import reportAPI from "../../api/reportAPI";
import { Doughnut } from "react-chartjs-2";

function EmployeesDoughnut(props) {
  const [loadedReport, setLoadedReport] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const fetchReport = useCallback(() => {
    reportAPI
      .fetchReport(201)
      .then((response) => {
        setLoadedReport(response.data);
      })
      .catch(console.error)
      .then(() => {
        setisLoading(false);
      });
  }, []);

  useEffect(fetchReport, [fetchReport]);

  const data = {
    labels: loadedReport.map((o) => o.title),
    datasets: [
      {
        label: "Top Salary",
        data: loadedReport.map((o) => o.employees_count),
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: isLoading,
        text: "Loading...",
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}

export default EmployeesDoughnut;
