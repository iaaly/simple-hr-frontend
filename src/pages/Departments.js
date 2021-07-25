import React, { useCallback, useContext, useEffect, useState } from "react";
import DepartmentsList from "../components/departments/DepartmentsList";
import departmentAPI from "../api/departmentAPI";
import AppContext from "../store/app-context";

function Departments() {
  const [loadedDepartments, setLoadedDepartments] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const appCtx = useContext(AppContext);

  const fetchData = useCallback(() => {
    return departmentAPI
      .departmentsList()
      .then((response) => {
        setLoadedDepartments(response.data);
        appCtx.updateDepartments(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .then(function () {
        setisLoading(false);
      });
  }, []);

  useEffect(fetchData, [fetchData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Departments</h1>
      <DepartmentsList departments={loadedDepartments} />
    </div>
  );
}

export default Departments;
