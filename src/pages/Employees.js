import React, { useCallback, useContext, useEffect, useState } from "react";
import employeeAPI from "../api/employeeAPI";
import { useHistory } from "react-router-dom";
import EmployeesList from "../components/employees/EmployeesList";
import AppContext from "../store/app-context";

function Employees(props) {
  const history = useHistory();

  const appCtx = useContext(AppContext);
  const [isLoading, setisLoading] = useState(true);
  const department = appCtx.departments.find(
    (d) => d.id == props.match.params.departmentId
  );

  const [loadedEmployees, setLoadedEmployees] = useState([]);

  const fetchData = useCallback(() => {
    return employeeAPI
      .employeesList(props.match.params.departmentId)
      .then((response) => {
        setLoadedEmployees(response.data);
      })
      .catch(console.error)
      .then(() => {
        setisLoading(false);
      });
  }, [props.match.params.departmentId]);

  useEffect(fetchData, [fetchData]);

  function addEmployeeHandler() {
    // Go to the Add employee form
    history.push(
      "/departments/" + props.match.params.departmentId + "/employees/new"
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{department ? department.title : ""} Employees</h1>

      <EmployeesList employees={loadedEmployees} />
      <button className="simple" onClick={addEmployeeHandler}>
        + New employee
      </button>
    </div>
  );
}

export default Employees;
