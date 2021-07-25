import NumberFormat from "react-number-format";
import Card from "../ui/Card";
import classes from "./EmployeeItem.module.css";

function EmployeeItem(props) {
  return (
    <div className={classes.mainDiv}>
      <Card>
        <div className={classes.content}>
          <div className={classes.employeeInfo}>
            <h3 className={classes.h3}>
              {props.emp.first_name} {props.emp.last_name}
            </h3>
            <span className={classes.position}>{props.emp.position}</span>
            <br />
            <NumberFormat
              value={props.emp.salary_amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"€"}
            />
          </div>
          <img
            alt=""
            className={classes.avatar}
            src="https://kingstonplaza.com/wp-content/uploads/2015/07/generic-avatar.png"
          />
        </div>
      </Card>
    </div>
  );
}

export default EmployeeItem;
