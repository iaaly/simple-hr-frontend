import { useHistory } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./DepartmentItem.module.css";

function DepartmentItem(props) {
  const history = useHistory();

  let employeesListHandler = () => {
    history.push("/departments/" + props.department.id + "/employees", {
      depName: props.department.title,
    });
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.department.title}</h3>
          <p>{props.department.description}</p>
        </div>
        <div className={classes.actions}>
          <button className="simple" onClick={employeesListHandler}>
            {props.department.employees_count}{" "}
            {props.department.employees_count == 1 ? "employee" : "employees"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default DepartmentItem;
