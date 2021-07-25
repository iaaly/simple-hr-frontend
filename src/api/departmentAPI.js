import API from "./API";

const api = {
  departmentsList() {
    return API.get("/departments");
  },
  newDepartment(title, description) {
    return API.post("/departments", {
      title: title,
      description: description,
    });
  },
};

export default api;
