import DepartmentItem from "./DepartmentItem";
import classes from "./DepartmentsList.module.css";

function DepartmentsList(props) {
  return (
    <ul className={classes.list}>
      {props.departments.map((dep) => {
        return <DepartmentItem department={dep} key={dep.id} />;
      })}
    </ul>
  );
}

export default DepartmentsList;
