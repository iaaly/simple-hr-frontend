import API from "./API";

const api = {
  fetchReport(reportId) {
    return API.get("/reports/" + reportId);
  },
};

export default api;
