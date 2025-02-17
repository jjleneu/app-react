import axios from "axios";

const api = axios.create({
  baseURL: "http://test.neu360.com/X-uitWSRestMagkaz2",
});

export default api;