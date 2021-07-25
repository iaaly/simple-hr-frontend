import { useHistory } from "react-router-dom";
import employeeAPI from "../api/employeeAPI";
import NewEmployeeForm from "../components/employees/NewEmployeeForm";

function NewEmployee(props) {
  const history = useHistory();

  function addEmployeeHandler(data) {
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
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  return (
    <section>
      <h1>New Employee</h1>
      <NewEmployeeForm onAddEmployee={addEmployeeHandler} />
    </section>
  );
}

export default NewEmployee;
