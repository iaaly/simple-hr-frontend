import API from "./API";

const api = {
  employeesList(departmentId) {
    return API.get(`/employees`, {
      department_id: departmentId,
    });
  },
  newEmployee(
    departmentId,
    firstName,
    lastName,
    position,
    salaryAmount,
    salaryCurrency
  ) {
    return API.post(`/employees`, {
      first_name: firstName,
      last_name: lastName,
      position: position,
      salary_amount: salaryAmount,
      salary_currency: salaryCurrency,
      department_id: departmentId,
    });
  },
};

export default api;
