import React, { useCallback, useEffect, useState } from "react";
import employeeAPI from "../api/employeeAPI";
import { useHistory } from "react-router-dom";
import EmployeesList from "../components/employees/EmployeesList";

function Employees(props) {
  const history = useHistory();

  function clickHandler() {
    history.push(
      "/departments/" + props.match.params.departmentId + "/employees/new"
    );
  }

  const [loadedEmployees, setLoadedEmployees] = useState([]);

  const fetchData = useCallback(() => {
    return employeeAPI
      .employeesList(props.match.params.departmentId)
      .then((response) => {
        console.log("gpt");
        setLoadedEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.match.params.departmentId]);

  useEffect(fetchData, [fetchData]);

  return (
    <div>
      <h1>Employees</h1>
      <span>{props.match.params.departmentId}</span>
      <button onClick={clickHandler}>Add new Employee</button>
      <EmployeesList employees={loadedEmployees} />
    </div>
  );
}

export default Employees;
