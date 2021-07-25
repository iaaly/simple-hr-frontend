import { useHistory } from "react-router-dom";

import departmentAPI from "../api/departmentAPI";

import NewDepartmentForm from "../components/departments/NewDepartmentForm";

function NewDepartment() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  function addDepartmentHandler(departmentData) {
    setIsLoading(true);
    departmentAPI
      .newDepartment(departmentData.title, departmentData.description)
      .then((response) => {
        // handle success
        console.log(response);
        history.push("/departments");
      })
      .catch(console.error)
      .then(() => {
        setIsLoading(false);
      });
  }

  return (
    <section>
      <h1>{isLoading ? "Loading..." : "New Department"}</h1>
      <NewDepartmentForm onAddDepartment={addDepartmentHandler} />
    </section>
  );
}

export default NewDepartment;
