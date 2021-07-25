import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import employeeAPI from "../api/employeeAPI";
import NewEmployeeForm from "../components/employees/NewEmployeeForm";
import AppContext from "../store/app-context";

function NewEmployee(props) {
  const history = useHistory();
  const appCtx = useContext(AppContext);
  const department = appCtx.departments.find(
    (d) => d.id == props.match.params.departmentId
  );
  const [isLoading, setIsLoading] = useState(false);

  function addEmployeeHandler(data) {
    setIsLoading(true);
    console.log(data);
    employeeAPI
      .newEmployee(
        props.match.params.departmentId,
        data.firstName,
        data.lastName,
        data.position,
        data.salaryAmount
      )
      .then((response) => {
        // handle success
        console.log(response);
        history.goBack();
      })
      .catch(console.error)
      .then(() => {
        setIsLoading(false);
      });
  }

  return (
    <section>
      <h1>{isLoading ? "Loading..." : "New Employee - " + department.title}</h1>
      <NewEmployeeForm onAddEmployee={addEmployeeHandler} />
    </section>
  );
}

export default NewEmployee;
