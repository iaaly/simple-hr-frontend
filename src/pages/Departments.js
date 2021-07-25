import React, { useCallback, useEffect, useState } from "react";
import DepartmentsList from "../components/departments/DepartmentsList";
import departmentAPI from "../api/departmentAPI";

function Departments() {
  const [loadedDepartments, setLoadedDepartments] = useState([]);

  const fetchData = useCallback(() => {
    return departmentAPI
      .departmentsList()
      .then((response) => {
        console.log("gpt");
        setLoadedDepartments(response.data);
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
