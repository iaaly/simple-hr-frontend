import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Simple HR app</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/departments">Departments</Link>
        </li>
        <li>
          <Link to="/new-department">New Department</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
