import { useCallback, useEffect, useState } from "react";
import reportAPI from "../../api/reportAPI";
import classes from "./ReportTable.module.css";
import Card from "../ui/Card";

function ReportTable(props) {
  const [loadedReport, setLoadedReport] = useState([]);

  const fetchReport = useCallback(() => {
    reportAPI
      .fetchReport(props.reportId)
      .then((response) => {
        setLoadedReport(response.data);
      })
      .catch(console.log);
  }, [props.reportId]);

  useEffect(fetchReport, [fetchReport]);

  return (
    <Card>
      <table className={classes.reportTable}>
        <thead>
          <tr>
            <th>{props.titleLabel}</th>
            <th>{props.valueLabel}</th>
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
