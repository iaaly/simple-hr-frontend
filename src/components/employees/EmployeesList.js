import EmployeeItem from "./EmployeeItem";

function EmployeesList(props) {
  return (
    <div>
      {props.employees.map((emp) => {
        return <EmployeeItem emp={emp} key={emp.id} />;
      })}
    </div>
  );
}

export default EmployeesList;
