import { useCallback, useEffect, useState } from "react";
import reportAPI from "../../api/reportAPI";
import classes from "./ReportTable.module.css";
import Card from "../ui/Card";

function ReportTable(props) {
  const [loadedReport, setLoadedReport] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const fetchReport = useCallback(() => {
    reportAPI
      .fetchReport(props.reportId)
      .then((response) => {
        setLoadedReport(response.data);
      })
      .catch(console.error)
      .then(() => {
        setisLoading(false);
      });
  }, [props.reportId]);

  useEffect(fetchReport, [fetchReport]);

  return (
    <Card>
      <table className={classes.reportTable}>
        <thead>
          <tr>
            <th>{isLoading ? "Loading..." : props.titleLabel}</th>
            <th>{isLoading ? "Loading..." : props.valueLabel}</th>
          </tr>
        </thead>
        <tbody>
          {loadedReport.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.title}</td>
              <td>{entry.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default ReportTable;
