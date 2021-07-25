import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Departments from "./pages/Departments";
import NewDepartment from "./pages/NewDepartment";
import Employees from "./pages/Employees";
import Layout from "./components/layout/Layout";
import NewEmployee from "./pages/NewEmployee";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/departments" component={Departments} exact />
          <Route path="/new-department" component={NewDepartment} />
          <Route
            path="/departments/:departmentId/employees"
            component={Employees}
            exact
          />
          <Route
            path="/departments/:departmentId/employees/new"
            component={NewEmployee}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
