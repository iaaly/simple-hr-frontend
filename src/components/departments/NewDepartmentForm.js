import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewDepartmentForm.module.css";

function NewDepartmentForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const departmentData = {
      title: enteredTitle,
      description: enteredDescription,
    };

    props.onAddDepartment(departmentData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Department</button>
        </div>
      </form>
    </Card>
  );
}

export default NewDepartmentForm;
