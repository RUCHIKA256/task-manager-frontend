import axios from "axios";

const API = axios.create({
  // baseURL: "http://127.0.0.1:8000/api/",
  baseURL:"https://willowy-selma-myself22-adad783f.koyeb.app/api/tasks/",

});

export const getTasks = () => API.get("tasks/");
export const createTask = (data) => API.post("tasks/", data);
export const updateTask = (id, data) => API.patch(`tasks/${id}/`, data);
export const deleteTask = (id) => API.delete(`tasks/${id}/`);

export default API;
