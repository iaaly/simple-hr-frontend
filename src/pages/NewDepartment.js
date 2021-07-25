import { useHistory } from "react-router-dom";

import departmentAPI from "../api/departmentAPI";

import NewDepartmentForm from "../components/departments/NewDepartmentForm";

function NewDepartment() {
  const history = useHistory();
  function addDepartmentHandler(departmentData) {
    departmentAPI
      .newDepartment(departmentData.title, departmentData.description)
      .then((response) => {
        // handle success
        console.log(response);
        history.push("/departments");
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  return (
    <section>
      <h1>New Department</h1>
      <NewDepartmentForm onAddDepartment={addDepartmentHandler} />
    </section>
  );
}

export default NewDepartment;
