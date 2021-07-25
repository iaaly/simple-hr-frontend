import React, { useCallback, useContext, useEffect, useState } from "react";
import DepartmentsList from "../components/departments/DepartmentsList";
import departmentAPI from "../api/departmentAPI";
import AppContext from "../store/app-context";

function Departments() {
  const [loadedDepartments, setLoadedDepartments] = useState([]);

  const appCtx = useContext(AppContext);

  const fetchData = useCallback(() => {
    return departmentAPI
      .departmentsList()
      .then((response) => {
        setLoadedDepartments(response.data);
        appCtx.updateDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(fetchData, [fetchData]);

  return (
    <div>
      <h1>Departments</h1>
      <DepartmentsList departments={loadedDepartments} />
    </div>
  );
}

export default Departments;
