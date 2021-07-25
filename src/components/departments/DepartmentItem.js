import { useHistory } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./DepartmentItem.module.css";

function DepartmentItem(props) {
  const history = useHistory();

  let employeesListHandler = () => {
    history.push("/departments/" + props.department.id + "/employees");
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.department.title}</h3>
          <p>{props.department.description} employees</p>
          <p>{props.department.headCount} employees</p>
          <p>{props.department.maxSalary} highest salary</p>
        </div>
        <div className={classes.actions}>
          <button onClick={employeesListHandler}>Employees list</button>
        </div>
      </Card>
    </li>
  );
}

export default DepartmentItem;
