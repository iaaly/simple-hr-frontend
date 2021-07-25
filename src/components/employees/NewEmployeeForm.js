import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewEmployeeForm.module.css";

function NewEmployeeForm(props) {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const positionInputRef = useRef();
  const salaryAmountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredPosition = positionInputRef.current.value;
    const enteredSalaryAmount = salaryAmountInputRef.current.value;

    const employeeData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      position: enteredPosition,
      salaryAmount: enteredSalaryAmount,
    };

    props.onAddEmployee(employeeData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="fname">First name</label>
          <input type="text" required id="fname" ref={firstNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="lname">Last name</label>
          <input type="text" required id="lname" ref={lastNameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="position">Position</label>
          <input type="text" required id="position" ref={positionInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="salary">Salary amount (EUR)</label>
          <input
            type="number"
            required
            id="salary"
            ref={salaryAmountInputRef}
          />
        </div>

        <div className={classes.actions}>
          <button>Add Employee</button>
        </div>
      </form>
    </Card>
  );
}

export default NewEmployeeForm;
