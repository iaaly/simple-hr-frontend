import DepartmentsBar from "../components/dashboard/DepartmentsBars";
import EmployeesDoughnut from "../components/dashboard/EmployeesDoughnut";
import ReportTable from "../components/dashboard/ReportTable";

function Home() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div className="flex-container">
        <div className="half-width">
          Top Salaries across departments
          <DepartmentsBar />
        </div>
        <div className="flex-item">
          Headcount by department
          <EmployeesDoughnut />
        </div>
      </div>

      <p>Departments having more than two employees'pay above 50k</p>
      <ReportTable reportId="102" titleLabel="Department" valueLabel="People" />
    </div>
  );
}

export default Home;
