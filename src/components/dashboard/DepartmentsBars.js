import { useCallback, useEffect, useState } from "react";
import reportAPI from "../../api/reportAPI";
import { Bar } from "react-chartjs-2";

function DepartmentsBar(props) {
  const [loadedReport, setLoadedReport] = useState([]);

  const fetchReport = useCallback(() => {
    reportAPI
      .fetchReport(101)
      .then((response) => {
        setLoadedReport(response.data);
      })
      .catch(console.log);
  }, []);

  useEffect(fetchReport, [fetchReport]);

  const data = {
    labels: loadedReport.map((o) => o.title),
    datasets: [
      {
        label: "Top Salary (€)",
        data: loadedReport.map((o) => o.value),
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
    indexAxis: "y",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "Top Salaries across departments",
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
}

export default DepartmentsBar;
