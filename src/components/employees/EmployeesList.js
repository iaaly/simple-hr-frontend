import EmployeeItem from "./EmployeeItem";

function EmployeesList(props) {
  return (
    <ul>
      {props.employees.map((emp) => {
        return <EmployeeItem emp={emp} key={emp.id} />;
      })}
    </ul>
  );
}

export default EmployeesList;
