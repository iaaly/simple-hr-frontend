import { createContext, useState } from "react";

const AppContext = createContext({
  departments: [],
  updateDepartments: (departmentsArray) => {},
});

export function AppContextProvider(props) {
  const [departments, setDepartments] = useState([]);

  function updateDepartments(dep) {
    setDepartments(dep);
  }

  const context = {
    departments: departments,
    updateDepartments: updateDepartments,
  };

  return (
    <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
  );
}

export default AppContext;
